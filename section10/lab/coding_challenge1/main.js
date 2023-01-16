const poll = {
        question: 'What is your favourite programming language?',
        options: ['0: js', '1: html', '2: c++', '3: php '],
        answers: new Array(4).fill(0),
        registerNewAnswer(){
                const answers = Number(
                        prompt(
                                `${this.question}\n ${this.options.join('\n')}\n(Write option number)`
                        )
                );
                console.log(answers);

                typeof answers === 'number' && answers < this.answers.length && this.answers[answers]++;

                console.log(this.answers);
        },
        displayResults(type = 'array') {
                if(type === 'array'){
                        console.log(this.answers);
                }else if (type === 'string'){
                        console.log (`Poll resulst are ${this.answers.join(',')}`);
                }
        },
};

document
.querySelector('.poll')
.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5,3,4]},'string');
poll.displayResults.call({ answers: [1,3,5,7,8,1 ]},'string');
poll.displayResults.call({ answers: [1,5,3,9,6,1]},);

