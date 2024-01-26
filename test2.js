
    $(document).ready(function () {
        // starting numbers
        var defaults = {
            topCabinetValue: 20,
            topCabinetPricePerItem: 170,
            bottomCabinetValue: 20,
            bottomCabinetPricePerItem: 200,
            islandPeninsulaValue: 0,
            islandPeninsulaPricePerItem: 400,
            pantryValue: 0,
            pantryPricePerItem: 250,
            revenue: 12100,
            minimulFt: 45,
        };

        // links to elements on the page
        var uiStorage = {
            topCabinetOutput: $("#top-cabinets-output"),
            bottomCabinetOutput: $("#bottom-cabinets-output"),
            islandPeninsulaOutput: $("#island-peninsula-output"),
            pantryOutput: $("#pantry-output"),
            customCabinetry: $("#customCabinetry"),
            plumbing: $("#plumbing"),
            barTop: $("#barTop"),
            revenue: $("#revenue"),
            radioButtons: $("[name='Backsplash-type']")
        };

        // price calculation function
        var calculate = function () {
            // coefficient by which to multiply the bottom cabinet slider values
            var bottomCabinetMultiplier = 0.0;
            // coefficient by which we multiply the values of island peninsula slider
            var islandMultiplier = 1.5;
            // coefficient by which we multiply the values of the entire amount
            var customCabinetry = uiStorage.customCabinetry.is(":checked") ? 1.5 : 1.0;
            var plumbing = uiStorage.plumbing.is(":checked") ? 900 : 0.0;
            // determine the value of the selected radio button
            var selectedRadioButtonValue = $("[name='Backsplash-type']:checked").val();
            if (selectedRadioButtonValue) {
                if (selectedRadioButtonValue === "full stone") {
                    bottomCabinetMultiplier = 50;
                } else if (selectedRadioButtonValue === "full tile") {
                    bottomCabinetMultiplier = 40;
                }
            }
            var TilePrice = 40;
            // расчет цены
            var priceTopCabinet = (Number.parseInt(uiStorage.topCabinetOutput.html())) * defaults.topCabinetPricePerItem;
            var priceBottomCabinet = (Number.parseInt(uiStorage.bottomCabinetOutput.html())) * defaults.bottomCabinetPricePerItem;
            var priceIslandPenisnula = (Number.parseInt(uiStorage.islandPeninsulaOutput.html())) * defaults.islandPeninsulaPricePerItem;
            var pricePantry = (Number.parseInt(uiStorage.pantryOutput.html())) * defaults.pantryPricePerItem;

            var revenue = defaults.revenue
                + (
                    priceTopCabinet +
                    priceBottomCabinet +
                    priceIslandPenisnula +
                    pricePantry)
                * customCabinetry
                + Number.parseInt(uiStorage.bottomCabinetOutput.html()) * bottomCabinetMultiplier
                + plumbing
                + barTopPrice;

            // write revenue to UI element
            uiStorage.revenue.html("$" + revenue);
        };

        // set initial values on UI elements
        uiStorage.topCabinetOutput.html(defaults.topCabinetValue);
        uiStorage.bottomCabinetOutput.html(defaults.bottomCabinetValue);
        uiStorage.islandPeninsulaOutput.html(defaults.islandPeninsulaValue);
        uiStorage.pantryOutput.html(defaults.pantryValue);

        // subscribe to the change/selection event of the radio button
        uiStorage.radioButtons.change(function () {
            calculate();
        });
        uiStorage.customCabinetry.change(function () {
            calculate();
        });
        uiStorage.plumbing.change(function () {
            calculate();
        });
        uiStorage.barTop.change(function () {
            calculate();
        });

        var setProgress = function (obj, relation) {
            var percent = relation * 100;
            $(obj).css({ background: "linear-gradient(to right, #e65800 0%, #ffaa00 " + percent + "%, #e5e5e5 " + percent + "%, #e5e5e5 100%)" });
        };

        setProgress($("#top-cabinets-slider")[0], defaults.topCabinetValue / 50);
        setProgress($("#bottom-cabinets-slider")[0], (defaults.bottomCabinetValue - 10) / 40);
        setProgress($("#island-peninsula-slider")[0], defaults.islandPeninsulaValue / 10);
        setProgress($("#pantry-slider")[0], defaults.pantryValue / 12);

        // Initialization of the Top cabinets slider
        $("#top-cabinets-slider").slider({
            value: defaults.topCabinetValue,
            min: 0,
            max: 50,
            slide: function (event, ui) {
                // write slider value to UI element
                uiStorage.topCabinetOutput.html(ui.value);
                setProgress(this, ui.value / 50);
                calculate();
            }
        });

        // Initialization of the Bottom cabinets slider
        $("#bottom-cabinets-slider").slider({
            min: 10,
            max: 50,
            value: defaults.bottomCabinetValue,
            slide: function (event, ui) {
                // write slider value to UI element
                uiStorage.bottomCabinetOutput.html(ui.value);
                setProgress(this, (ui.value - 10) / 40);
                calculate();
            }
        });

        // Initialize the Island / Peninsula Slider
        $("#island-peninsula-slider").slider({
            min: 0,
            max: 10,
            value: defaults.islandPeninsulaValue,
            slide: function (event, ui) {
                // write slider value to UI element
                uiStorage.islandPeninsulaOutput.html(ui.value);
                setProgress(this, (ui.value) / 10);
                calculate();
            }
        });

        // Initialize the Pantry Slider
        $("#pantry-slider").slider({
            min: 0,
            max: 12,
            value: defaults.pantryValue,
            slide: function (event, ui) {
                // write slider value to UI element
                uiStorage.pantryOutput.html(ui.value);
                setProgress(this, (ui.value) / 12);
                calculate();
            }
        });
        calculate();
    });
