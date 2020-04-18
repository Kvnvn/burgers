// $(()=>{
//     $(".devoured").on("click",function(){
//         const id =$(this).attr("data-id")
//         $.ajax({
//             url: `/api/burger/${id}`,
//             method:"patch",
//             data:{devoured:true}
//         }).then(()=> {
//             location.reload();
//         });
//     });
// });