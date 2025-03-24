export interface ControlPagination {
    page: number,
    limit: number,
}

export interface ResponsePagination<T> {
    results: T,
    meta: {
        total: number,
        page: number,
    }
}