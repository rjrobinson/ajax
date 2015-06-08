(function() {

    var link = document.getElementsByTagName("a")[0];

    link.onclick = function() {
        // XHR OBJ
        var xhr = new XMLHttpRequest();

        // handle the onReady state change event
        // xhr.readyState property values
        //  0 = Uninitalized
        //  1 = Loading
        //  2 = Loaded
        //  3 = Interactive
        //  4 = Complete

        xhr.onreadystatechange = function() {
            console.log(xhr.status);
            if ((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)) {
                console.log(xhr.status);
                var body = document.getElementsByTagName("body")[0];

                var json = JSON.parse(xhr.responseText);

                var heading = json.heading;
                var h2 = document.createElement("h2")
                var h2Text = document.createTextNode(heading);


                var list = document.createElement("ul");

                var items = json.items;

                for (var key in items) {
                    var item = items[key];
                    var li = document.createElement("li");
                    var liText = document.createTextNode(item);
                    li.appendChild(liText);
                    list.appendChild(li);
                };


                h2.appendChild(h2Text);
                body.appendChild(h2)
                body.appendChild(list)


                body.removeChild(link);
            }
        };

        // Open request.
        xhr.open("GET", "ajax.json", true);

        // send request to server.
        xhr.send(null);
        return false;
    };
})();
