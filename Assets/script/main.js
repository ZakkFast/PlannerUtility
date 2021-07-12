$currentTime = moment().format('dddd, MMMM Do, YYYY')
$('#currentDay').text($currentTime)

function populate(){
    for(i = 8; i <= 17; i++){
        $row = $(`<div class= "row">`)
        $hour = $(`<div class = "hour time-block col-1"></div>`)
        $hour.text(moment(i, 'hh').format('LT'))
        $input = $(`<textarea class = "col-10" id='inputText${i}' type='text' name='userInput'></textarea>`)
        $input.text(localStorage.getItem(i))
        $button = $(`<div class = "saveBtn col-1" data-id='${i}'>Save</div>`)
        $('.container').append($row)
        $($row).append($hour)
        $($row).append($input)
        $($row).append($button)
        
        $timeNow = moment().format('HH')
        $timeBlock = i
        if($timeBlock == $timeNow){
            $input.addClass('present')
        } else if ($timeBlock < $timeNow){
            $input.addClass('past')
        } else {
            $input.addClass('future')
        }
    }
    $(".saveBtn").click(function(){
        var id = $(this).data("id")
        var userInput = $(this).siblings().eq(1).val()
        localStorage.setItem(id,userInput)
        })
}
populate()