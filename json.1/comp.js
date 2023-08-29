//script for generating select options for DOB
        function ele(id) {
            return document.getElementById(id);
        }

        function gen_options(id, min, max) {
            for (var i = min; i <= max; i++) {
                var opt = document.createElement('option');
                opt.value = i;
                opt.innerHTML = i;
                if (i == max) {
                    opt.selected = "selected";
                }
                ele(id).appendChild(opt);
            }
        }
        gen_options("mm", 1, 12);
        gen_options("dd", 1, 31);
        gen_options("yy", 1900, new Date().getFullYear());