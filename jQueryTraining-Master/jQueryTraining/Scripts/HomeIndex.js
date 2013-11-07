var HomeIndex = {
    Init: function () {
        var form = $('#frmContact');

        var btnSubmit = form.find('input[type=submit]');
        btnSubmit.on('click', function (event) {
            event.preventDefault();
            HomeIndex.Valid(form);
        });

        var chkBox = form.find('#acceptTerms');
        chkBox.on('change', function (event) {

        });

        var slType = form.find('select');
        slType.on('change', function (event) {

        });
    },
    Valid: function (frm) {
        var invalidElms = [];
        var invalidMSG = [];

        //Fist Name
        var fName = frm.find('#firstName'),
         fnValue = $.trim(fName.val()),
         invalidFName = false;

        if (fnValue == '') {
            invalidFName = true;
            invalidMSG.push('First Name is required.');
        }

        if (fnValue.length > 255) {
            invalidFName = true;
            invalidMSG.push('First Name must be less than 255.');
        }

        if (invalidFName) {
            invalidElms.push(fName);
        }


        //Last Name
        var lName = frm.find('#lastName'),
         lnValue = $.trim(lName.val()),
         invalidLName = false;

        if (lnValue == '') {
            invalidLName = true;
            invalidMSG.push('Last Name is required.');
        }

        if (lnValue.length > 255) {
            invalidLName = true;
            invalidMSG.push('Last Name must be less than 255.');
        }

        if (invalidLName) {
            invalidElms.push(lName);
        }

        //Email
        var emailAddress = frm.find('#emailAddress'),
            emailValue = $.trim(emailAddress.val()),
            invalidEmail = false;

        if (emailValue == '') {
            invalidEmail = true;
            invalidMSG.push('An email address is required');
        }

        if (emailValue.length > 255) {
            invalidEmail = true;
            invalidMSG.push('Email address must be less than 255');
        }

        var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (invalidEmail == false && !pattern.test(emailValue)) {
            invalidEmail = true;
            invalidMSG.push('Please enter a valid email address');
        }




        //Select List

        //Terms
        console.log(invalidMSG);

    }
}