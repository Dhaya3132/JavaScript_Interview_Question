const promiseall = async function(functions)
{
    return Promise.all(functions.map(fn => fn()));
}

