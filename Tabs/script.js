function showSection(sectionId) {
    var sections = document.querySelectorAll('.box');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Initially show the History section
showSection('history');