var HomeIndex = {
    Init: function () {
        var form = $('#frmContact');  
        
        var btnSubmit = form.find('input[type=submit]');
        console.log(btnSubmit);

        var chkBox = form.find('#acceptTerms');
        console.log(chkBox);

        var slType = form.find('select');
        console.log(slType);

        //Other tests
        console.log(form.find('label:even'));
        console.log(form.find('label').parent());
        console.log(form.find('label').parents('form'));


    }
}