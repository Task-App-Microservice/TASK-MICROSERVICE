# Stage 1: Build stage
FROM node:23-alpine AS builder

# Instala ferramentas necessárias para compilar código nativo
RUN apk add --no-cache python3 make g++ && corepack enable && corepack prepare pnpm@latest --activate

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instala as dependências
RUN pnpm install --frozen-lockfile

# Copia o diretório prisma
COPY prisma ./prisma

# Gera o cliente Prisma
RUN pnpm prisma generate

# Copia o restante do código-fonte
COPY . .

# Compila a aplicação NestJS
RUN pnpm build

# Stage 2: Final stage
FROM node:23-alpine

# Define o diretório de trabalho
WORKDIR /app

# Instala apenas o PNPM e dependências mínimas
RUN apk add --no-cache python3 make g++ && corepack enable && corepack prepare pnpm@latest --activate

# Copia os node_modules e o código compilado do estágio anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/prisma ./prisma

# Expõe a porta da aplicação
EXPOSE 4002

# Comando para iniciar a aplicação em produção
CMD ["pnpm", "start:prod"]