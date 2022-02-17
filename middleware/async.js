const asyncWrapper = (fn) => {
    return async(req,res,next) => {
        console.log(fn)
        try {
            await fn(req,res,next)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper