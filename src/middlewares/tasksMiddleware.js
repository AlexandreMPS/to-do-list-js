const validateTitle = (request, response, next) => {
    const { body } = request;

    if(body.title === undefined){
        response.status(400).json({message: 'The field "title" is required'});
    }

    if(body.title === ''){
        response.status(400).json({message: 'The field "title" cannot be empty'});
    }

    if(typeof body.title !== String){
        response.status(400).json({message: 'The field "title" needs to be a string'});
    }

    next();

};

const validateStatus = (request, response, next) => {
    const { body } = request;

    if(body.status === undefined){
        response.status(400).json({message: 'The field "status" is required'});
    }

    if(body.status === ''){
        response.status(400).json({message: 'The field "status" cannot be empty'});
    }

    if(typeof body.status !== String){
        response.status(400).json({message: 'The field "status" needs to be a string'});
    }

    next();

};

module.exports = {
    validateTitle,
    validateStatus,
};