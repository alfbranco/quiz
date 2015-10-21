var Question = function (id, x, y, question, answer) {
    this.id = id
    this.x = x
    this.y = y
    this.type = 'text'
    this.question = question
    this.answer = answer
    this.status = -1
}

Question.prototype.render = function() {
    console.log('render called')

    content = '<div id="question-' + this.id + '" class="question-handle id-' + this.id + ' col-sm-1 text-center"><h1>' + this.question + '</h1></div>'

    return content
}

Question.prototype.validate = function() {
    //console.log('render called')

    //TODO Check if is true
    this.status = 1
    this.challenge.maze.refresh()
}

Question.prototype.refresh = function() {
    var q = $('#question-' + this.id)

    if(this.status == 1) {
        q.addClass('question-success')
    }
}

Question.prototype.setParent = function(challenge) {
    this.challenge = challenge
}