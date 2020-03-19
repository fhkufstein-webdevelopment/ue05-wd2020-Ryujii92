$(document).ready(function() {

    var userListBody = $('.userList tbody');
    $('.needs-validation').submit(function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        } else {
            addUser()
        };

        function addUser() {

            var tr = document.createElement('tr');
            var td1 = tr.appendChild(document.createElement('td'));
            var td2 = tr.appendChild(document.createElement('td'));
            var td3 = tr.appendChild(document.createElement('td'));
            var rowCount = table.rows.length;

            td1.innerHTML = rowCount;
            td2.innerHTML = document.getElementById("username").value;
            td3.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button>";

            document.getElementById("table").appendChild(tr);
            document.getElementById("username").value = '';
        }
    });

    $(document).on('click','.btn-danger', function(event){
        var jaNein = confirm("Möchtest du es wirklich löschen?");
        if(jaNein == true){
            ($(event.target).closest("tr")).remove();
        }
    });
});

// Den Counter konnte ich nicht machen weil es nur noch schlimmer wurde und es am ende nicht mehr funktionierte.
