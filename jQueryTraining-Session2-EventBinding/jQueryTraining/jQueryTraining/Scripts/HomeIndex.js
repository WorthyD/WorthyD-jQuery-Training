var HomeIndex = {
    Init: function () {
        var form = $('#frmContact');

        var btnSubmit = form.find('input[type=submit]');
        btnSubmit.on('click', function (event) {
            event.preventDefault();
        });

        var chkBox = form.find('#acceptTerms');
        chkBox.on('change', function (event) {
            console.log(this.checked);
            console.log($(this).is(':checked'));
            console.log($(this).prop('checked'));
            console.log($(this).attr('checked'));  //checked="checked" 
        });

        var slType = form.find('select');
        slType.on('change', function (event) {
            console.log($(this));
            console.log(this.value);
            console.log($(this).val());
            console.log($(this).prop('selectedIndex'));
        });
    }
}