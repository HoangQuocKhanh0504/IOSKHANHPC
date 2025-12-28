
function responsiveChat(element) {
    $(element).html(
        '<form class="chat"><section id="conversation"><aside class="info"><p>To:<span class="name">KHANHPC <i class="far fa-angle-down"></i></span> <a id="details">Details</a></p></aside></section><div class="messages"></div><input type="text" placeholder="Your message"></input><input type="submit" value="Send"></input></form>');
    function showLatestMessage() {
        $(element).find('.messages').scrollTop($(element).find('.messages').height());
    }
    showLatestMessage();


    $(element + ' input[type="text"]').keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            $(element + ' input[type="submit"]').click();
        }
    });
    $(element + ' input[type="submit"]').click(function (event) {
        event.preventDefault();
        var message = $(element + ' input[type="text"]').val();
        if (message) {
            var d = new Date();
            var clock = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            var month = d.getMonth() + 1;
            var day = d.getDate();
            var currentDate =
                (("" + day).length < 2 ? "0" : "") +
                day +
                "." +
                (("" + month).length < 2 ? "0" : "") +
                month +
                "." +
                d.getFullYear() +
                "&nbsp;&nbsp;" +
                clock;

            // Thêm tin nhắn của người dùng
            $(element + ' div.messages').append(
                '<div class="message"><div class="myMessage"><p>' +
                message +
                "</p><date>" +
                currentDate +
                "</date></div></div>"
            );

            // Phản hồi cố định từ KHANHPC
            setTimeout(function () {
                $(element + ' .messages').append(
                    '<div class="message"><div class="fromThem"><p>Cảm ơn bạn đã nhắn tin</p><date><b>KHANHPC</b> ' + currentDate + '</date></div></div>'
                );
                showLatestMessage();
            }, 500); // 0.5 giây delay như thật
        }

        $(element + ' input[type="text"]').val("");
        showLatestMessage();
    });

}

function responsiveChatPush(element, sender, origin, date, message) {
    var originClass;
    if (origin == 'me') {
        originClass = 'myMessage';
    } else {
        originClass = 'fromThem';
    }
    $(element + ' .messages').append('<div class="message"><div class="' + originClass + '"><p>' + message + '</p><date><b>' + sender + '</b> ' + date + '</date></div></div>');
}

/* Activating chatbox on element */
responsiveChat('.responsive-html5-chat');

/* Thêm dữ liệu mẫu về dịch vụ thiết kế web */
responsiveChatPush('.chat', 'KHANHPC', 'me', '08.05.2021 09:00:00', 'Chào bạn! Tôi là KHANHPC, chuyên thiết kế website chuyên nghiệp.');
responsiveChatPush('.chat', 'Khách hàng', 'you', '09:02:15', 'Chào KHANHPC! Bạn có thể giới thiệu dịch vụ của mình không?');
responsiveChatPush('.chat', 'KHANHPC', 'me', '08.05.2021 09:03:30', 'Chắc chắn rồi! Tôi cung cấp thiết kế web chuẩn SEO, responsive và tối ưu trải nghiệm người dùng.');
responsiveChatPush('.chat', 'KHANHPC', 'me', '08.05.2021 09:05:10', 'Bạn muốn chúng tôi phát triển website thương mại điện tử hay trang giới thiệu công ty?');
responsiveChatPush('.chat', 'Khách hàng', 'you', '09:06:45', 'Tôi cần một trang giới thiệu công ty chuyên nghiệp.');
responsiveChatPush('.chat', 'KHANHPC', 'me', '08.05.2021 09:08:20', 'Hoàn hảo! Tôi sẽ thiết kế giao diện hiện đại, màu sắc hài hòa và tích hợp các tính năng cần thiết cho công ty của bạn.');
responsiveChatPush('.chat', 'Khách hàng', 'you', '09:09:50', 'Nghe tuyệt vời, bạn có thể gửi báo giá không?');
responsiveChatPush('.chat', 'KHANHPC', 'me', '08.05.2021 09:10:30', 'Tất nhiên! Tôi sẽ gửi báo giá chi tiết và thời gian hoàn thành sớm nhất có thể.');
