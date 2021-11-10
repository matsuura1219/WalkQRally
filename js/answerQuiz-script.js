{

    /** 変数 **/

    // ポップアップ画面が表示されているかどうかを判定するフラグ
    let isShowing = false;

    // 回答欄
    let answer1 = document.getElementById("js-answer1");
    let answer2 = document.getElementById("js-answer2");
    let answer3 = document.getElementById("js-answer3");

    // オーバーレイ
    let overlay = document.getElementById("js-overlay");

    // ポップアップ画面
    let popup = document.getElementById("js-popup");
    let yes = document.getElementById("js-yes");
    let no = document.getElementById("js-no");

    // 成功
    let popup2 = document.getElementById("js-popup2");
    let backToMap = document.getElementById("js-back-button2");

    // 失敗
    let popup3 = document.getElementById("js-popup3");
    let challengeButton = document.getElementById("js-back-button3");

    // イベント設定
    answer1.addEventListener("click", touchAnswer);
    answer2.addEventListener("click", touchAnswer);
    answer3.addEventListener("click", touchAnswer);
    yes.addEventListener("click", callAPI);
    no.addEventListener("click", hiddenPopup);

    backToMap.addEventListener("click", backToMapScreen);
    challengeButton.addEventListener("click", challengeQuiz);


    /** 関数 **/

    // 回答ボタンをクリックした際に実行させる関数
    function touchAnswer() {

        if (isShowing) {
            // ポップアップ画面が表示されている場合
            overlay.style.visibility = "hidden";
            popup.style.visibility = "hidden";
            isShowing = false;

        } else {
            // ポップアップ画面が表示されていない場合
            overlay.style.visibility = "visible";
            popup.style.visibility = "visible";
            isShowing = true;

        }
    }

    // WEBAPIをコールする関数です
    function callAPI() {

        popup.style.visibility = "hidden";

        let flag = true;
        if (flag) {
            popup2.style.visibility = "visible";
        } else {
            popup3.style.visibility = "visible";
        }

    }

    // ポップアップ画面を非表示にする関数です
    function hiddenPopup() {
        overlay.style.visibility = "hidden";
        popup.style.visibility = "hidden";
        isShowing = false;
    }


    // マップ画面に戻る関数です
    function backToMapScreen() {
        popup2.style.visibility = "hidden";
        overlay.style.visibility = "hidden";
        isShowing = false;
        history.back();
    }

    // 再チャレンジする関数です
    function challengeQuiz() {
        popup3.style.visibility = "hidden";
        overlay.style.visibility = "hidden";
        isShowing = false;
    }

    window.onload = function() {
        mapboxgl.accessToken = "pk.eyJ1IjoibWF0c3V1cmExMjE5IiwiYSI6ImNrdDJobWVsejBwOXoycG4yM2dicTNvOGUifQ.9F7jQ0VPtqz-N5GG4p0ofA";
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [139.7671, 35.6812],
            zoom: 9
        });
    }
}