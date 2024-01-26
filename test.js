$(document).ready(function () {
        // starting numbers
        let defaults = {
            salesValue: 5117,
            averageRevenueValue: 19408,
            revenue: 210095,
        };

        // links to elements on the page
       
        let salesOutput = document.querySelector("#sales-output");
        let averageRevenueOutput = document.querySelector("#average-revenue-output");
        let revenue = document.querySelector("#revenue");

    
        var calculate = function () {// расчет цены
            let sumSalesEnlarged = (Number.parseInt(salesOutput.innerHTML()))*1.5;
            let sumRevenueEnlarged = (Number.parseInt(averageRevenueOutput.innerHTML()))*1.3;
            revenue = sumSalesEnlarged*sumRevenueEnlarged*12 - (salesOutput*averageRevenueOutput*12)

            // write revenue to UI element
            revenue.innerHTML("$" + revenue);
        };

        // set initial values on UI elements
        salesOutput.innerHTML(defaults.salesValue);
        averageRevenueOutput.innerHTML(defaults.averageRevenueValue);

        var setProgress = function (obj, relation) {
            var percent = relation * 100;
            $(obj).css({ background: "linear-gradient(to right, #e65800 0%, #ffaa00 " + percent + "%, #e5e5e5 " + percent + "%, #e5e5e5 100%)" });
        };

        setProgress($("#sales-slider")[0], defaults.salesValue / 50);
        setProgress($("#average-revenue-slider")[0], (defaults.averageRevenueValue) / 50);

       
        // Initialization of the sales slider
        $("#sales-slider").slider({
            value: defaults.salesValue,
            min: 0,
            max: 100000,
            slide: function (event, ui) {
                // write slider value to UI element
                uiStorage.salesOutput.innerHTML(ui.value);
                setProgress(this, ui.value / 50);
                calculate();
            }
        });

        // Initialization of the revenue slider
        $("#average-revenue-slider").slider({
            min: 0,
            max: 50000,
            value: defaults.averageRevenueValue,
            slide: function (event, ui) {
                // write slider value to UI element
                uiStorage.averageRevenueOutput.innerHTML(ui.value);
                setProgress(this, ui.value / 50);
                calculate();
            }
        });

        calculate();
    });









    