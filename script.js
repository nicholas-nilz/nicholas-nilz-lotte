$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#F5F5DC', '#D3D3D3', '#F5F5DC', '#D3D3D3', '#F5F5DC'],
        anchors: ['home', 'books', 'stats', 'inventory', 'footer'],
        menu: '#menu',
        scrollOverflow: true,
        navigation: true,
        afterRender: function () {
            animateHomeSection();
            animateChartSection();
            animateBookSection();
        },
        afterLoad: function (origin, destination, direction) {
            if (destination.anchor === 'home') {
                animateHomeSection();
            } else if (destination.anchor === 'books') {
                animateBookSection();
            } else if (destination.anchor === 'stats') {
                animateChartSection();
            } else if (destination.anchor === 'inventory') {
                animateInventorySection();
            } else if (destination.anchor === 'footer') {
                animateFooterSection();
            }
        },
    });

    const chartData = {
        labels: ['Horror', 'Fiction', 'Non-Fiction', 'Romance', 'Children-Friendly'],
        datasets: [{
            label: 'Number of Books',
            data: [30, 45, 12, 23, 60],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const ctx = document.getElementById('libraryChart').getContext('2d');
    const libraryChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    const formatPreferencesData = {
        labels: ['Picture Books', 'E-books', 'Audiobooks', "Paperback", "Hardcover"],
        datasets: [{
            data: [40, 30, 30, 20, 25], 
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFA500', '#008000'], 
        }],
    };

    const formatPreferencesChartContainer = document.getElementById('formatPreferencesChart').getContext('2d');

    const formatPreferencesChart = new Chart(formatPreferencesChartContainer, {
        type: 'pie',
        data: formatPreferencesData,
    });


    function animateHomeSection() {
        var homeContainer = document.querySelector('.home-container');
        var elementsToAnimate = homeContainer.querySelectorAll('.row.align-items-center > *');
        var delayIncrement = 200;

        anime.timeline({ loop: false })
            .add({
                targets: elementsToAnimate,
                translateY: [-20, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
                delay: anime.stagger(delayIncrement),
            });
    }

    function animateBookSection() {
        var bookCards = document.querySelectorAll('.book-container .card');

        anime.timeline({ loop: false })
            .add({
                targets: '.book-container h3',
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            })
            .add({
                targets: bookCards,
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
                delay: anime.stagger(200, { start: 500 }),
            }, '-=500');
    }

    function animateChartSection() {
        var barContainer = document.querySelector('.bar-container');
        var pieContainer = document.querySelector('.pie-container');
    
        anime.timeline({ loop: false })
            .add({
                targets: '.bar-container h3',
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            })
            .add({
                targets: barContainer.querySelector('canvas'),
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500')
            .add({
                targets: '.pie-container h3',
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            })
            .add({
                targets: pieContainer.querySelector('canvas'),
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500');
    }
    

    function animateInventorySection() {
        var inventoryContainer = document.querySelector('.inventory-container');
        var table = document.getElementById('table');

        anime.timeline({ loop: false })
            .add({
                targets: '.inventory-h2',
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            })
            .add({
                targets: table,
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500');
    }

    function animateFooterSection() {
        var footerSection = document.getElementById('footer-section');

        anime.timeline({ loop: false })
            .add({
                targets: '#footer-section h2',
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            })
            .add({
                targets: '.contact-icon',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
                delay: anime.stagger(200),
            }, '-=500')
            .add({
                targets: '#footer-section h3',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500')
            .add({
                targets: '.location p',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500')
            .add({
                targets: '.map-container',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500')
            .add({
                targets: '.poly-marker',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500')
            .add({
                targets: '#footer-section a',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500')
            .add({
                targets: '#footer-section p',
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000,
            }, '-=500');
    }

    var dataSet = [
        ["The Three Little Pigs", "Hillert, Margaret", "Children", 2017, "Picture Book"],
        ["Little Red Riding Hood", "Hillert, Margaret", "Children", 2017, "Picture Book"],
        ["Redlocks and the Three Bears", "Rueda, Claudia", "Children", 2021, "Picture Book"],
        ["Girls in Pieces", "Glasgow, Kathleen", "Fiction", 2016, "Audio Book"],
        ["How to Make Friends With The Dark", "Glasgow, Kathleen", "Fiction", 2019, "Audio Book"],
        ["Wonder", "R.J. Palacio", "Fiction", 2012, "Paperback"],
        ["You'd Be Home Now", "Glasgow, Kathleen", "Fiction", 2021, "Audio Book"],
        ["The Boy in the Striped Pyjamas", "John Boyne", "Fiction", 2006, "Paperback"],
        ["The Silent Observer", "Emily Thompson", "Mystery", 2019, "Hardcover"],
        ["Echoes of Eternity", "Michael Reynolds", "Fantasy", 2022, "Paperback"],
        ["Whispers in the Wind", "Sarah Johnson", "Romance", 2017, "E-book"],
        ["Beyond the Horizon", "David Mitchell", "Science Fiction", 2020, "Audiobook"],
    ];

    $('#table').DataTable({
        data: dataSet,
        pagelength: 10,
        columns: [
            { title: "Title" },
            { title: "Author" },
            { title: "Genre" },
            { title: "Year" },
            { title: "Type" }
        ]
    });

    $('[data-bs-toggle="tooltip"]').tooltip();
    document.querySelectorAll('.carousel-item .btn-primary').forEach(button => {
        button.addEventListener('mouseenter', function () {
            const tooltip = new bootstrap.Tooltip(this, {
                title: 'Click here to reserve the book!',
                placement: 'top',
            });
            tooltip.show();
        });

        button.addEventListener('mouseleave', function () {
            const tooltip = bootstrap.Tooltip.getInstance(this);
            if (tooltip) {
                tooltip.dispose();
            }
        });

        button.addEventListener('click', function () {
            if (this.disabled) {
                alert('You have already reserved this book!');
            } else {
                this.textContent = 'Reserved';
                this.disabled = true;
                this.style.backgroundColor = 'red';
                alert('Book reserved successfully!');
            }
        });
    });

    document.querySelectorAll('.bi.bi-bookmark').forEach(button => {
        button.addEventListener('click', function () {
            if (this.disabled) {
                alert('You have already added this book to your bookmark!');
            } else {
                this.textContent = '';
                this.disabled = true;
                this.style.backgroundColor = 'yellow';
                alert('You have added this book to your bookmark successfully!');
            }
        });
    });

    $("#searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $(document).ready(function () {
        $("#filterSelect").on("change", function () {
            var selectedAuthor = $(this).val().toLowerCase();
            $(".card").filter(function () {
                $(this).toggle($(this).data("author").toLowerCase() === selectedAuthor || selectedAuthor === "all");
            });
        });
    });

    $(document).ready(function () {
        $("#filterSelect").on("change", function () {
            var selectedGenre = $(this).val().toLowerCase();
            $(".card").filter(function () {
                $(this).toggle($(this).data("genre").toLowerCase() === selectedGenre || selectedGenre === "all");
            });
        });
    });

    function filterBooks(selectedFilter, selectedValue) {
        const allCards = document.querySelectorAll('.card');

        allCards.forEach(card => {
            const cardValue = card.getAttribute(`data-${selectedFilter}`);

            if (selectedValue === 'all' || cardValue === selectedValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    $(document).ready(function () {
        $('#calendar').fullCalendar({
            events: [
                {
                    title: 'Book Club Meeting',
                    start: '2024-02-10T14:30:00',
                    end: '2024-02-10T16:00:00',
                    description: 'Discussing the latest book.'
                },
                {
                    title: 'Book Festival',
                    start: '2024-02-05T16:30:00',
                    end: '2024-02-05T20:00:00',
                    description: 'Lotte\'s Book Festival.'
                },
                {
                    title: 'StoryTelling by Kathleen Glasgow',
                    start: '2024-02-17T11:30:00',
                    end: '2024-02-17T16:00:00',
                    description: 'Storytelling of "Three Little Pigs"'
                },
                {
                    title: 'StoryTelling by Magaret',
                    start: '2024-03-17T11:30:00',
                    end: '2024-03-17T16:00:00',
                    description: 'Storytelling of "Wonder"'
                },
            ],
            eventClick: function (event, jsEvent, view) {
                var startTime = moment(event.start).format('YYYY-MM-DD HH:mm:ss');
                var endTime = moment(event.end).format('YYYY-MM-DD HH:mm:ss');
                alert('Event: ' + event.title + '\nDescription: ' + event.description + '\nStart Timing: ' + startTime + '\nEnd Timing: ' + endTime);
            }
        });
    });

    const libraries = [
        { name: 'Lotte Library, Bras Basah', top: 2705, left: 700 },
    ];

    const mapContainer = document.getElementById('map');

    mapContainer.addEventListener('click', (event) => {
        const clickedMarker = event.target.closest('.poly-marker');

        if (clickedMarker) {
            const markerIndex = Array.from(mapContainer.children).indexOf(clickedMarker);
            const clickedLibrary = libraries[markerIndex];
            alert(clickedLibrary.name + ' clicked!');
        }
    });

    libraries.forEach(library => {
        const marker = document.createElement('div');
        marker.className = 'poly-marker';
        marker.style.top = library.top + 'px';
        marker.style.left = library.left + 'px';
        mapContainer.appendChild(marker);

        tippy(marker, {
            content: library.name,
            placement: 'top'
        });
    });
});

function showBookDescription(title, description) {
    var modalTitle = document.querySelector("#bookDescriptionModal .modal-title");
    var modalBody = document.querySelector("#bookDescriptionModal .modal-body");

    modalTitle.textContent = title;
    modalBody.textContent = description;

    $('#bookDescriptionModal').modal('show');
}

