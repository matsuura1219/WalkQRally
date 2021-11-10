(function() {

    // ポップアップ画面が表示されているかどうかを判定するフラグ
    let isShowing = false;

    // チェックボックス
    let checkbox1 = document.getElementById("js-checkbox1");
    let checkbox2 = document.getElementById("js-checkbox2");
    let checkbox3 = document.getElementById("js-checkbox3");

    // input
    let input1 = document.getElementById("js-input1");
    let input2 = document.getElementById("js-input2");
    let input3 = document.getElementById("js-input3");

    // textare
    let textarea = document.getElementById("js-textarea");

    // ボタン
    let button = document.getElementById("js-button");

    // オーバーレイ
    let overlay = document.getElementById("js-overlay");

    // ポップアップ画面
    let popup1 = document.getElementById("js-popup1");
    let yes = document.getElementById("js-yes");
    let no = document.getElementById("js-no");

    // ポップアップの戻るボタン
    let backButton = document.getElementById("js-back-button");

    // ありがとう画面
    let popup2 = document.getElementById("js-popup2");


    // イベント設定
    checkbox1.addEventListener("click", changeCheckBox1State);
    checkbox2.addEventListener("click", changeCheckBox2State);
    checkbox3.addEventListener("click", changeCheckBox3State);

    button.addEventListener("click", showPopup);
    yes.addEventListener("click", callAPI);
    no.addEventListener("click", hiddenPopup);
    backButton.addEventListener("click", hiddenSuccessPopup);


    /** 関数 **/

    // チェックボックス1の状態を変更する関数です
    function changeCheckBox1State() {

        clearCheckBox();
        checkbox1.style.backgroundColor = "#E66226";
        input1.style.border = "1px solid #E66226";
    }

    // チェックボックス2の状態を変更する関数です
    function changeCheckBox2State() {

        clearCheckBox();
        checkbox2.style.backgroundColor = "#E66226";
        input2.style.border = "1px solid #E66226";

    }

    // チェックボックス3の状態を変更する関数です
    function changeCheckBox3State() {

        clearCheckBox();
        input3.style.border = "1px solid #E66226";

    }

    function clearCheckBox() {
        checkbox1.style.backgroundColor = "#FFFFFF";
        checkbox2.style.backgroundColor = "#FFFFFF";
        checkbox3.style.backgroundColor = "#FFFFFF";

        input1.style.border = "1px solid #AAAAAA";
        input2.style.border = "1px solid #AAAAAA";
        input3.style.border = "1px solid #AAAAAA";
    }

    // WEBAPIをコールする関数です
    function callAPI() {

        popup1.style.visibility = "hidden";

        showSuccessPopup();

    }

    // ポップアップ画面を非表示にする関数です
    function hiddenPopup() {
        overlay.style.visibility = "hidden";
        popup1.style.visibility = "hidden";
        isShowing = false;
    }

    function showPopup() {

        /*
        // inputの入力チェック
        let answer1 = input1.value;
        let answer2 = input2.value;
        let answer3 = input3.value;

        // texrareaの入力チェック
        let question = textarea.value;

        if ((answer1 == null || answer1 == "") || (answer2 == null || answer2 == "") || (answer3 == null || answer3 == "") || (question == null || question == "")) {
            alert("入力項目に値が設定されていません。");
            return
        }
        */


        if (isShowing) {
            // ポップアップ画面が表示されている場合
            overlay.style.visibility = "hidden";
            popup1.style.visibility = "hidden";
            isShowing = false;

        } else {
            // ポップアップ画面が表示されていない場合
            overlay.style.visibility = "visible";
            popup1.style.visibility = "visible";
            isShowing = true;

        }
    }

    function showSuccessPopup() {

        popup2.style.visibility = "visible";
    }

    function hiddenSuccessPopup() {
        overlay.style.visibility = "hidden";
        popup2.style.visibility = "hidden";
        isShowing = false;
        history.back();
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




}());