$(document).ready(function() {
    bind(".happy", function() {
        feedback(this);
    });
    bind(".sad", function() {
        feedback(this);
    });
});

function feedback(option) {
    var isHappy = $(option).hasClass('happy');
    bind(".happy", function() {
        showHappy();
        $(".happyContainer").addClass("display");
    });
    bind(".sad", function() {
        showSad();
        $(".happyContainer").addClass("display");
    });

    bind(".submitButton", function() {
        $(".happyContainer").removeClass("display").addClass("slide");
        var val = {};
        val.text = $('.knowMore').val();
        $('.knowMore').val('');
        val.selectRow = array;
        val.replyCircle = count;
        text.response(val, function(t) {});
    });
    var array;
    bind(".selectRow", function() {
        $(this).find(".selectCircle").toggleClass("changeColor");
        if (array.indexOf($(this).find('.selectText').html()) > -1) {
            array.pop($(this).find('.selectText').html());
        } else {
            array.push($(this).find('.selectText').html());
        }
    });

    bind(".changeImage", function() {
        var v = $(this).attr('src');
        var happy = "../images/happy.png";
        if (v != happy) {
            showSad();
        }
        if (v == happy) {
            showHappy();
        }
    });
    bind(".mainReply", function() {
        $(this).find(".replyCircle").toggleClass("showImage");
        if (count = "no") {
            count = "yes";
        } else {
            count = "no";
        }
    });
}

function showHappy() {
    console.log("hello");
    $(".happyContainer .happyBox .happy .happyImage").attr("src", "../images/happy.png");
    $(".happyBox .greatContainer").html("That's great!");
    $(".happyBox .tellContainer").html("Tell us what we got right");
    $(".changeContainer .changeImage").attr("src", "../images/sad.png");
    $(".commentBox .knowMore").attr("placeholder", "Let us know more...");
}

function showSad() {
    console.log("hello");
    $(".happyContainer .happyBox .happy .happyImage").attr("src", "../images/sad.png");
    $(".happyBox .greatContainer").html("We're really sorry");
    $(".happyBox .tellContainer").html("Tell us what went wrong");
    $(".changeContainer .changeImage").attr("src", "../images/happy.png");
    $(".commentBox .knowMore").attr("placeholder", "What went wrong? How can we do better?");
}
