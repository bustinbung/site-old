// make window draggable
$(".window").draggable({
    handle: ".title-bar"
});

// open new window
$("#help-button").click( () => {
    $("#help-window").css({
        top: "0px",
        left: "0px"
    })
    $("#help-window").show();
});

// close window 
$("#help-close").click( () => {
    $("#help-window").hide();
});

//set position onload
$(document).ready( () => {
    $("#help-window").css({
        top: "0px",
        left: "0px"
    })
})