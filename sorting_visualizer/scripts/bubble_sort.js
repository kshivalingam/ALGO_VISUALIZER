function Bubble()
{
    c_delay=0;
    var x = document.getElementById('tc').innerHTML;
    document.getElementById('tc').innerHTML = x + "O(n^2)";

    x = document.getElementById('sc').innerHTML;
    document.getElementById('sc').innerHTML = x + "O(n^2)";

    var cnt = document.getElementById('contnt').innerHTML;
    document.getElementById('contnt').innerHTML = "Bubble sort is a sorting algorithm that works by repeatedly stepping through lists that need to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order. This passing procedure is repeated until no swaps are required,indicating that the list is sorted. Bubble sort gets its name because smaller elements bubble toward the top of the list";





    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "blue");//Color updat
        }
        div_update(divs[j],div_sizes[j], "green");//Color update
    }
    div_update(divs[0],div_sizes[0], "green");//Color update

    enable_buttons();
}