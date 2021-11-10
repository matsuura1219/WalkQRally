(function() {

    /** 変数 **/

    // MAP
    //let map;

    // FAB
    let fab = document.getElementById("js-fab");

    // Marker
    const markers = [];

    // MODAL画面
    let modal = document.getElementById("js-modal");

    // キャンセルボタン
    let cancel = document.getElementById("js-cancel-button");

    // 回答開始ボタン
    let answerButton = document.getElementById("js-answer-button");

    let question = document.getElementById("js-question");
    let all = document.getElementById("js-question");
    let correct = document.getElementById("js-correct");

    // ポップアップ画面
    let overlay = document.getElementById("js-overlay");
    let popup = document.getElementById("js-popup")
    let yes = document.getElementById("js-yes");
    let no = document.getElementById("js-no");

    // イベント設定
    fab.addEventListener("click", showPopup);
    cancel.addEventListener("click", hidddenModal);
    answerButton.addEventListener("click", moveToAnswerScreen);
    yes.addEventListener("click", moveToAnswerScreen);
    no.addEventListener("click", hiddenPopup);

    mapboxgl.accessToken = "pk.eyJ1IjoibWF0c3V1cmExMjE5IiwiYSI6ImNrdDJobWVsejBwOXoycG4yM2dicTNvOGUifQ.9F7jQ0VPtqz-N5GG4p0ofA";


    const geojson = {
        'type': 'FeatureCollection',
        'features': [{
                'type': 'Feature',
                'properties': {
                    'message': 'Foo',
                    'all': 3,
                    "correct": 1,
                    'iconSize': [60, 60]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-66.324462, -16.024695]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Bar',
                    'all': 3,
                    "correct": 1,
                    'iconSize': [50, 50]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-61.21582, -15.971891]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Baz',
                    'all': 3,
                    "correct": 1,
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-63.292236, -18.281518]
                }
            }
        ]
    };

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-65.017, -16.457],
        zoom: 5
    });


    /** 関数 **/

    // ロード時の関数
    window.onload = function() {

        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/testApi/uploadQuiz?title=test&description=test&question=test&select1=test&select2=test&select3=test&answer=3&latitude=54.54999999&longitude=43.433222");
        xhr.onreadystatechange = function() {

            if (xhr.readyState !== 4) { return }

            if (xhr.status === 200) {
                const jsonString = xhr.responseText;
                console.log(jsonString);

                addMarkerToMap(jsonString)
            } else {
                // リクエストのレスポンスコードが 200以外(OKではない) 
                console.log('HTTP error', xhr.status, xhr.statusText);
            }
        }

        xhr.send();

        /*
        mapboxgl.accessToken = "pk.eyJ1IjoibWF0c3V1cmExMjE5IiwiYSI6ImNrdDJobWVsejBwOXoycG4yM2dicTNvOGUifQ.9F7jQ0VPtqz-N5GG4p0ofA";

        const geojson = {
            'type': 'FeatureCollection',
            'features': [{
                    'type': 'Feature',
                    'properties': {
                        'message': 'Foo',
                        'all': 3,
                        "correct": 1,
                        'iconSize': [60, 60]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-66.324462, -16.024695]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'message': 'Bar',
                        'all': 3,
                        "correct": 1,
                        'iconSize': [50, 50]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-61.21582, -15.971891]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'message': 'Baz',
                        'all': 3,
                        "correct": 1,
                        'iconSize': [40, 40]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-63.292236, -18.281518]
                    }
                }
            ]
        };

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-65.017, -16.457],
            zoom: 5
        });

        */

        /*
        // Add markers to the map.
        for (const marker of geojson.features) {
            // Create a DOM element for each marker.
            const el = document.createElement('div');
            //const width = marker.properties.iconSize[0];
            //const height = marker.properties.iconSize[1];
            el.className = 'marker';
            el.style.backgroundImage = `url(img/pin.PNG)`;
            el.style.width = `80px`;
            el.style.height = `80px`;
            el.style.backgroundSize = 'contain';
            el.style.backgroundRepeat = 'no-repeat';

            el.addEventListener('click', () => {
                showModal(marker.properties.message, marker.properties.all, marker.properties.correct);
            });

            // Add markers to the map.
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        }
        */
    };



    // ポップアップ画面を表示する関数です
    function showPopup() {
        overlay.style.visibility = "visible";
        popup.style.visibility = "visible"

    }

    // ポップアップ画面を非表示にする関数です
    function hiddenPopup() {
        overlay.style.visibility = "hidden";
        popup.style.visibility = "hidden"
    }

    // モーダル画面を表示させる関数です
    function showModal(message, all, correct) {
        modal.classList.add("modal-show-animate");
        question.innerHTML = message;
        all.innerHTML = all;
        correct.innerHTML = correct;


    }


    // モーダル画面を非表示にする関数です
    function hidddenModal() {
        modal.classList.remove("modal-show-animate");
    }

    function moveToAnswerScreen() {
        window.location.href = "answerQuiz.html";
    }


    // MAP場にマーキングを行う関数です
    function addMarkerToMap(jsonString) {

        alert(jsonString);


        // Add markers to the map.
        for (const marker of geojson.features) {
            // Create a DOM element for each marker.
            const el = document.createElement('div');
            //const width = marker.properties.iconSize[0];
            //const height = marker.properties.iconSize[1];
            el.className = 'marker';
            el.style.backgroundImage = `url(img/pin.PNG)`;
            el.style.width = `80px`;
            el.style.height = `80px`;
            el.style.backgroundSize = 'contain';
            el.style.backgroundRepeat = 'no-repeat';

            el.addEventListener('click', () => {
                showModal(marker.properties.message, marker.properties.all, marker.properties.correct);
            });

            // Add markers to the map.
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        }

    }
}());