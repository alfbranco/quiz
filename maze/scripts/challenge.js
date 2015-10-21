var Challenge = function () {
    this.length = 0
    this.questions = new Array()
    console.log('Challenge created')
}

Challenge.prototype.addQuestion = function(id, x, y, question, answer) {
    this.length++
    var question = new Question(id, x, y, question, answer)
    question.setParent(challenge)
    this.questions.push(question)
}

Challenge.prototype.getQuestion = function(index) {
    console.log('getQuestion called')
    return this.questions[index]
}

Challenge.prototype.setParent = function(maze) {
    this.maze = maze
}