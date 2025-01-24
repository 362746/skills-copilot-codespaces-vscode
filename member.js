function skillsMember() {
    var member = {
        name: "Karl",
        age: 27,
        skills: ["HTML", "CSS", "JS"],
        showSkills: function() {
            this.skills.forEach(function(skill) {
                console.log(skill);
            });
        }
    };

    member.showSkills();
}