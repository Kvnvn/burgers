$(() => {
        $(".devoured").on("click", function () {
            const id = $(this).attr("data-id");
            $.ajax({
                url: `/api/burgers/${id}`,
                method: "patch",
                data: { devoured: true }
            }).then(() => {
                location.reload();
            })
        })
    });