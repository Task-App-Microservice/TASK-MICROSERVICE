import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class GlobalResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data)=>({
        statusCode: context.switchToHttp().getResponse().statusCode,
        success: true,
        detail: "Operação bem sucessidda",
        data,
        error: null,
        metadata: {
          type: "object"
      },
        timestamp: new Date().toISOString(),
      }))
    );
  }
}
