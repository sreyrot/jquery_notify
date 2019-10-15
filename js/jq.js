$(document).ready(function() {
    $('#btn').on('click', function() {
        var user= $('#user').val();
        var pass= $('#pass').val();

        isUser(user);
        isPass(pass);
    //    if(user != ''){
    //        setSuccess('user');
    //    }else{
    //        setError('user');
    //    }

    //    if(pass != ''){
    //        setSuccess('pass');
    //    }else{
    //        setError('pass');
    //    }


    })
});

function setSuccess(success){
    $('#'+  success).addClass('border-success').removeClass('border-danger');
}
function setError(error){
$('#'+ error).addClass('border-danger').removeClass('border-success');
}

function isUser(u){
    (u != '')?(
        setSuccess('user'),
        $.notify('user correct', 'success')
    ): (
        setError('user'),
        $.notify('user incorrect', 'error')
    )
    
}
function isPass(p){
    (p != '')?(
        setSuccess('pass'),
        $.notify('pass correct', 'success')
    ):(
        setError('pass'),
        $.notify('pass incorrect', 'error')
    )
}




