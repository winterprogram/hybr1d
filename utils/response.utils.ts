

export class ResponseUtils {
    success: boolean;
    message: string;
    constructor(success: boolean, message: string) {
        this.success = success;
        this.message = message;
    }
}

export class ResponsewithDataUtils {
    success: boolean;
    message: string;
    data: any
    constructor(success: boolean, message: string, data:any) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
}