var Maze = function (x, y) {
    this.x = x
    this.y = y
    console.log('Maze created: (' + this.x + '/' + this.y + '): ' + this.x * this.y);

}

Maze.prototype.render = function() {
    console.log('render called')
};

Maze.prototype.setChallenge = function(challenge) {
    challenge.setParent(this)
    this.challenge = challenge
};

Maze.prototype.addDummyChallege = function() {
    console.log('addDummyChallege called')

    var counter = 0
    for(x=0; x<this.x; x++) {
        for(y=0; y<this.y; y++) {
            var question = 'Q ' + x + '/' + y + ': ' + counter
            var answer = 'Answer: ' + counter
            this.challenge.addQuestion(counter, x, y, question, answer)
            counter++
        }
    }
};

Maze.prototype.render = function() {
    console.log('render called')

    content = ''
    var counter = 0
    for(x=0; x<this.x; x++) {
        content += '<div class="container"><div class="row vdivide">'
        for(y=0; y<this.y; y++) {
            question = this.challenge.getQuestion(counter)
            content += question.render()
            counter++
        }
        content += '</div></div>'
    }

    return content
};

Maze.prototype.refresh = function() {
    var total = this.challenge.length
    for(i=0; i<total; i++) {
        this.challenge.getQuestion(i).refresh()
    }
};