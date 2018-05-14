var curYPos = 0,
    curXPos = 0,
    curDown = false;

window.addEventListener('mousemove', function(e){
  if(curDown === true){
    window.scrollTo(document.body.scrollLeft + (curXPos - e.pageX), document.body.scrollTop + (curYPos - e.pageY));
  }
});

window.addEventListener('mousedown', function(e){ curDown = true; curYPos = e.pageY; curXPos = e.pageX; });
window.addEventListener('mouseup', function(e){ curDown = false; });

        $(function() {

            $('#calendar').fullCalendar({
                header: {
                    left: 'today prev,next',
                    center: 'title',
                    right: 'timelineDay,timelineWeek'
                },
                defaultView: 'timelineDay',
                resourceGroupField: 'building',
                resources: [{
                        id: 'a',
                        building: 'Bryant',
                        title: 'Project A'
                    },
                    {
                        id: 'b',
                        building: 'Ryan',
                        title: 'Project B'
                    },
                    {
                        id: 'c',
                        building: 'Ryan',
                        title: 'Project C'
                    },
                    {
                        id: 'd',
                        building: 'Josh J',
                        title: 'Project A'
                    },
                    {
                        id: 'e',
                        building: 'Josh J',
                        title: 'Project B'
                    },
                    {
                        id: 'f',
                        building: 'Josh V',
                        title: 'Project B'
                    },
                    {
                        id: 'g',
                        building: '564 Pacific',
                        title: 'Project G'
                    },
                    {
                        id: 'h',
                        building: '564 Pacific',
                        title: 'Project H'
                    },
                    {
                        id: 'i',
                        building: '564 Pacific',
                        title: 'Project I'
                    },
                    {
                        id: 'j',
                        building: '564 Pacific',
                        title: 'Project J'
                    },
                    {
                        id: 'k',
                        building: '564 Pacific',
                        title: 'Project K'
                    },
                    {
                        id: 'l',
                        building: '564 Pacific',
                        title: 'Project L'
                    },
                    {
                        id: 'm',
                        building: '564 Pacific',
                        title: 'Project M'
                    },
                    {
                        id: 'n',
                        building: '564 Pacific',
                        title: 'Project N'
                    },
                    {
                        id: 'o',
                        building: '101 Main St',
                        title: 'Project O'
                    },
                    {
                        id: 'p',
                        building: '101 Main St',
                        title: 'Project P'
                    },
                    {
                        id: 'q',
                        building: '101 Main St',
                        title: 'Project Q'
                    },
                    {
                        id: 'r',
                        building: '101 Main St',
                        title: 'Project R'
                    },
                    {
                        id: 's',
                        building: '101 Main St',
                        title: 'Project S'
                    },
                    {
                        id: 't',
                        building: '101 Main St',
                        title: 'Project T'
                    },
                    {
                        id: 'u',
                        building: '101 Main St',
                        title: 'Project U'
                    },
                    {
                        id: 'v',
                        building: '101 Main St',
                        title: 'Project V'
                    },
                    {
                        id: 'w',
                        building: '101 Main St',
                        title: 'Project W'
                    },
                    {
                        id: 'x',
                        building: '101 Main St',
                        title: 'Project X'
                    },
                    {
                        id: 'y',
                        building: '101 Main St',
                        title: 'Project Y'
                    },
                    {
                        id: 'z',
                        building: '101 Main St',
                        title: 'Project Z'
                    }
                ]
            });

        });
