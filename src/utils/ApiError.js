class ApiError extends Error {
    constructor(
        statusCode,
        message = "somthing went wrong ",
        error =[],
        stack = ""
    ){
        super(message)
        this.status = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors



        
    }
}

export{ApiError}