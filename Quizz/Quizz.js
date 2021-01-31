$(function() {
    let arrQuestion = [
        {
            ques: '1+1=?',
            listAnser: [
                {
                    title: '1',
                    isCorrect : false
                },
                {
                    title: '2',
                    isCorrect : true
                },
                {
                    title: '3',
                    isCorrect : false
                },
                {
                    title: '4',
                    isCorrect : false
                },
            ]
        },
        {
            ques: '1+2=?',
            listAnser: [
                {
                    title: '1',
                    isCorrect : false
                },
                {
                    title: '2',
                    isCorrect : false
                },
                {
                    title: '3',
                    isCorrect : true
                },
                {
                    title: '4',
                    isCorrect : false
                },
            ]
        },
    ]

    let arrcheck = []

    
    let indexQNow = 0;

    function createQuestion (indexNumber) {
        let stringDomAnsewer = ''
        anserListNow = arrQuestion[indexNumber].listAnser
        for(i=0;i<= anserListNow.length -1 ; i++) {
            stringDomAnsewer += `<button value=${anserListNow[i].isCorrect} class="button-check" >${anserListNow[i].title}</button>`
        }
        return `
            <div class="wrap-ques">
                <p id="question">${arrQuestion[indexNumber].ques}</p>
                <div id="buttonBox">

                ${stringDomAnsewer}

                </div>
            </div>
        `
    }


    $('#container').append(createQuestion(indexQNow))


        $( ".button-check" ).click(function(item) {
            console.log('item', item)
            // lay value cua button ra
            arrcheck.push(item.target.value)
            indexQNow ++
            $('.wrap-ques').replaceWith(createQuestion(indexQNow))


        });


    



});