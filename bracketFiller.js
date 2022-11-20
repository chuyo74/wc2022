var startBracket = ["A0","B1","C0","D1","E0","F1","G0","H1","B0","A1","D0","C1","F0","E1","H0","G1","W49","W50","W53","W54","W51","W52","W55","W56","W57","W58","W59","W60","W61","W62","W64"]
var teamHeight = ["SENEGAL","ENGLAND","POLAND","FRANCE","GERMANY","CROATIA","BRAZIL","URUGUAY","IRAN","NETHERLANDS","DENMARK","ARGENTINA","BELGIUM","COSTA RICA","PORTUGAL","SERBIA","SENEGAL","FRANCE","GERMANY","BRAZIL","NETHERLANDS","DENMARK","BELGIUM","SERBIA","FRANCE","BRAZIL","DENMARK","SERBIA","BRAZIL","SERBIA","BRAZIL",];
var coachSalary = ["NETHERLANDS","UNITED STATES","SAUDI ARABIA","AUSTRALIA","GERMANY","CANADA","BRAZIL","URUGUAY","ENGLAND","QATAR","FRANCE","ARGENTINA","BELGIUM","SPAIN","PORTUGAL","SWITZERLAND","NETHERLANDS","SAUDI ARABIA","GERMANY","BRAZIL","ENGLAND","FRANCE","SPAIN","SWITZERLAND","NETHERLANDS","GERMANY","FRANCE","SPAIN","GERMANY","FRANCE","GERMANY"];
var teamValue = ["NETHERLANDS","UNITED STATES","ARGENTINA","DENMARK","SPAIN","CROATIA","BRAZIL","URUGUAY","ENGLAND","SENEGAL","FRANCE","POLAND","BELGIUM","GERMANY","PORTUGAL","SERBIA","NETHERLANDS","ARGENTINA","SPAIN","BRAZIL","ENGLAND","FRANCE","GERMANY","PORTUGAL","NETHERLANDS","BRAZIL","ENGLAND","PORTUGAL","BRAZIL","ENGLAND","ENGLAND"];
var lifeExpectancy = ["NETHERLANDS","WALES","ARGENTINA","FRANCE","JAPAN","BELGIUM","SWITZERLAND","PORTUGAL","ENGLAND","QATAR","AUSTRALIA","POLAND","CANADA","SPAIN","KOREA REPUBLIC","BRAZIL","NETHERLANDS","FRANCE","JAPAN","SWITZERLAND","ENGLAND","AUSTRALIA","SPAIN","KOREA REPUBLIC","FRANCE","JAPAN","AUSTRALIA","KOREA REPUBLIC","JAPAN","KOREA REPUBLIC","JAPAN"]
var gdp = ["QATAR","WALES","SAUDI ARABIA","AUSTRALIA","GERMANY","BELGIUM","SWITZERLAND","PORTUGAL","UNITED STATES","NETHERLANDS","DENMARK","POLAND","CANADA","JAPAN","KOREA REPUBLIC","SERBIA","QATAR","AUSTRALIA","BELGIUM","SWITZERLAND","UNITED STATES","DENMARK","CANADA","KOREA REPUBLIC","QATAR","SWITZERLAND","UNITED STATES","CANADA","SWITZERLAND","UNITED STATES","SWITZERLAND"];
var beer = ["NETHERLANDS","WALES","POLAND","DENMARK","GERMANY","BELGIUM","BRAZIL","URUGUAY","UNITED STATES","ECUADOR","AUSTRALIA","MEXICO","CROATIA","SPAIN","PORTUGAL","SERBIA","NETHERLANDS","POLAND","GERMANY","BRAZIL","UNITED STATES","MEXICO","CROATIA","SERBIA","POLAND","GERMANY","UNITED STATES","CROATIA","POLAND","CROATIA","POLAND"];
var forests = ["ECUADOR","ENGLAND","MEXICO","AUSTRALIA","JAPAN","CROATIA","BRAZIL","PORTUGAL","UNITED STATES","SENEGAL","FRANCE","POLAND","CANADA","COSTA RICA","KOREA REPUBLIC","CAMEROON","ECUADOR","MEXICO","JAPAN","BRAZIL","SENEGAL","FRANCE","COSTA RICA","KOREA REPUBLIC","ECUADOR","JAPAN","SENEGAL","KOREA REPUBLIC","JAPAN","KOREA REPUBLIC","JAPAN"];
var homicides = ["ECUADOR","ENGLAND","MEXICO","FRANCE","COSTA RICA","MOROCCO","BRAZIL","PORTUGAL","UNITED STATES","NETHERLANDS","TUNISIA","ARGENTINA","CANADA","GERMANY","URUGUAY","SERBIA","ECUADOR","MEXICO","COSTA RICA","BRAZIL","UNITED STATES","ARGENTINA","CANADA","URUGUAY","MEXICO","BRAZIL","UNITED STATES","URUGUAY","MEXICO","URUGUAY","MEXICO"];
var renewables = ["NETHERLANDS","WALES","POLAND","AUSTRALIA","GERMANY","CROATIA","BRAZIL","URUGUAY","ENGLAND","ECUADOR","DENMARK","MEXICO","BELGIUM","SPAIN","PORTUGAL","SWITZERLAND","WALES","POLAND","GERMANY","URUGUAY","ENGLAND","DENMARK","SPAIN","PORTUGAL","WALES","URUGUAY","DENMARK","PORTUGAL","URUGUAY","DENMARK","DENMARK"];
var womenParliament = ["SENEGAL","WALES","MEXICO","FRANCE","COSTA RICA","CROATIA","SWITZERLAND","URUGUAY","ENGLAND","ECUADOR","DENMARK","ARGENTINA","BELGIUM","SPAIN","PORTUGAL","SERBIA","SENEGAL","MEXICO","COSTA RICA","SWITZERLAND","ECUADOR","ARGENTINA","SPAIN","PORTUGAL","MEXICO","COSTA RICA","ARGENTINA","SPAIN","MEXICO","ARGENTINA","MEXICO"];
var coffee = ["NETHERLANDS","ENGLAND","POLAND","FRANCE","GERMANY","CROATIA","SWITZERLAND","KOREA REPUBLIC","UNITED STATES","SENEGAL","DENMARK","SAUDI ARABIA","CANADA","COSTA RICA","PORTUGAL","BRAZIL","ENGLAND","FRANCE","GERMANY","SWITZERLAND","UNITED STATES","DENMARK","CANADA","PORTUGAL","FRANCE","SWITZERLAND","DENMARK","CANADA","SWITZERLAND","DENMARK","DENMARK"];
var co2 = ["SENEGAL","WALES","MEXICO","FRANCE","COSTA RICA","CROATIA","CAMEROON","URUGUAY","ENGLAND","ECUADOR","TUNISIA","ARGENTINA","MOROCCO","SPAIN","GHANA","BRAZIL","SENEGAL","MEXICO","COSTA RICA","CAMEROON","ECUADOR","TUNISIA","MOROCCO","GHANA","SENEGAL","CAMEROON","ECUADOR","GHANA","CAMEROON","GHANA","CAMEROON"];
var happiness =["NETHERLANDS","WALES","SAUDI ARABIA","AUSTRALIA","GERMANY","BELGIUM","SWITZERLAND","PORTUGAL","ENGLAND","ECUADOR","DENMARK","MEXICO","CANADA","COSTA RICA","URUGUAY","BRAZIL","NETHERLANDS","AUSTRALIA","GERMANY","SWITZERLAND","ENGLAND","DENMARK","CANADA","URUGUAY","NETHERLANDS","SWITZERLAND","DENMARK","CANADA","SWITZERLAND","DENMARK","DENMARK"];
var covidCases = ["NETHERLANDS","WALES","ARGENTINA","FRANCE","GERMANY","CROATIA","SWITZERLAND","KOREA REPUBLIC","ENGLAND","QATAR","DENMARK","POLAND","BELGIUM","SPAIN","PORTUGAL","SERBIA","NETHERLANDS","FRANCE","GERMANY","SWITZERLAND","ENGLAND","DENMARK","BELGIUM","PORTUGAL","FRANCE","SWITZERLAND","DENMARK","PORTUGAL","FRANCE","PORTUGAL","PORTUGAL"];

function updateBracket() {
    var list = document.getElementById("list");
    var selectedOption = list.options[list.selectedIndex];
    var updatedList;
    // Team Height
    if (selectedOption.innerHTML.localeCompare("Team height") == 0) {
        updatedList = teamHeight;
        document.getElementById("Comment").innerHTML = "Average height of players in national team.";
    }
    else if (selectedOption.innerHTML.localeCompare("Team value") == 0) {
        updatedList = teamValue;
        document.getElementById("Comment").innerHTML = "Transfer value of players in national team. <a href=\"https://www.statista.com/statistics/1298093/value-of-the-national-teams-at-the-qatar-world-cup/\">Source.</a>";
    }
    else if (selectedOption.innerHTML.localeCompare("Head coach salary") == 0) {
        updatedList = coachSalary;
        document.getElementById("Comment").innerHTML = "National team's coach salary. <a href=\"https://www.worldcupglory.com/football/fifa-world-cup-head-coaches-salaries/\">Source.</a>";
    }
    else if (selectedOption.innerHTML.localeCompare("Life expectancy") == 0) {
        updatedList = lifeExpectancy;
        document.getElementById("Comment").innerHTML = "Country's life expectancy at birth (2020). <a href=\"https://data.worldbank.org/indicator/SP.DYN.LE00.IN?end=2020\">Source.</a>";
    }
    else if (selectedOption.innerHTML.localeCompare("GDP per capita") == 0) {
        updatedList = gdp;
        document.getElementById("Comment").innerHTML = "Gross domestic product per capita (2021). <a href=\"https://data.worldbank.org/indicator/NY.GDP.PCAP.CD\">Source.</a>";
    }
    else if (selectedOption.innerHTML.localeCompare("Beer consumption") == 0) {
        updatedList = beer;
        document.getElementById("Comment").innerHTML = "Beer consumption per capita (2016). <a href=\"https://ourworldindata.org/grapher/beer-consumption-per-person?tab=table&time=2016\">Source.</a>";
    }
    else if (selectedOption.innerHTML.localeCompare("Forest area") == 0) {
        updatedList = forests;
        document.getElementById("Comment").innerHTML = "Forest area (%) (2020). <a href=\"https://data.worldbank.org/indicator/AG.LND.FRST.ZS?most_recent_value_desc=true\">Source.</a>";
    }
    else if (selectedOption.innerHTML.localeCompare("Homicide rate") == 0) {
        updatedList = homicides;
        document.getElementById("Comment").innerHTML = "Intentional homicide rate (2020). <a href=\"https://data.worldbank.org/indicator/VC.IHR.PSRC.P5?most_recent_value_desc=true\">Source.</a>";
    }
    else if (selectedOption.innerHTML.localeCompare("Renewable electricity") == 0) {
        updatedList = renewables;
        document.getElementById("Comment").innerHTML = "Electricity production from renewables excluding hydroelectric (% of total) (2015). <a href=\"https://data.worldbank.org/indicator/EG.ELC.RNWX.ZS\">Source.</a>";
    }
    else if (selectedOption.innerHTML.localeCompare("Women in parliament") == 0) {
        updatedList = womenParliament;
        document.getElementById("Comment").innerHTML = "Proportion of seats held by women in national parliaments (% of total) (2021). <a href=\"https://data.worldbank.org/indicator/SG.GEN.PARL.ZS?most_recent_value_desc=true\">Source.</a>";
    }
    else if (selectedOption.innerHTML.localeCompare("Coffee consumption") == 0) {
        updatedList = coffee;
        document.getElementById("Comment").innerHTML = "Coffee consumption per capita (2017). <a href=\"https://www.helgilibrary.com/indicators/coffee-consumption-per-capita/\">Source.</a>";
    }
    else if (selectedOption.innerHTML.localeCompare("CO2 emissions") == 0) {
        updatedList = co2;
        document.getElementById("Comment").innerHTML = "CO2 emissions per capita (lowest) (2019). <a href=\"https://data.worldbank.org/indicator/EN.ATM.CO2E.PC?locations=1W&most_recent_value_desc=false\">Source.</a>";
    }
    else if (selectedOption.innerHTML.localeCompare("Happiness index") == 0) {
        updatedList = happiness;
        document.getElementById("Comment").innerHTML = "Happiness index (2021). <a href=\"https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2021?resource=download\">Source.</a>";
    }
    else if (selectedOption.innerHTML.localeCompare("Covid cases") == 0) {
        updatedList = covidCases;
        document.getElementById("Comment").innerHTML = "Total covid cases per 1 million of the population (2022). <a href=\"https://www.kaggle.com/datasets/anandhuh/covid19-in-world-countrieslatest-data\">Source.</a>";
    }

    else {
        updatedList = startBracket;
        document.getElementById("Comment").innerHTML = "";
    }

    document.getElementById("A0").innerHTML = updatedList[0];
    document.getElementById("B1").innerHTML = updatedList[1];
    document.getElementById("C0").innerHTML = updatedList[2];
    document.getElementById("D1").innerHTML = updatedList[3];
    document.getElementById("E0").innerHTML = updatedList[4];
    document.getElementById("F1").innerHTML = updatedList[5];
    document.getElementById("G0").innerHTML = updatedList[6];
    document.getElementById("H1").innerHTML = updatedList[7];
    document.getElementById("B0").innerHTML = updatedList[8];
    document.getElementById("A1").innerHTML = updatedList[9];
    document.getElementById("D0").innerHTML = updatedList[10];
    document.getElementById("C1").innerHTML = updatedList[11];
    document.getElementById("F0").innerHTML = updatedList[12];
    document.getElementById("E1").innerHTML = updatedList[13];
    document.getElementById("H0").innerHTML = updatedList[14];
    document.getElementById("G1").innerHTML = updatedList[15];
    document.getElementById("W49").innerHTML = updatedList[16];
    document.getElementById("W50").innerHTML = updatedList[17];
    document.getElementById("W53").innerHTML = updatedList[18];
    document.getElementById("W54").innerHTML = updatedList[19];
    document.getElementById("W51").innerHTML = updatedList[20];
    document.getElementById("W52").innerHTML = updatedList[21];
    document.getElementById("W55").innerHTML = updatedList[22];
    document.getElementById("W56").innerHTML = updatedList[23];
    document.getElementById("W57").innerHTML = updatedList[24];
    document.getElementById("W58").innerHTML = updatedList[25];
    document.getElementById("W59").innerHTML = updatedList[26];
    document.getElementById("W60").innerHTML = updatedList[27];
    document.getElementById("W61").innerHTML = updatedList[28];
    document.getElementById("W62").innerHTML = updatedList[29];

    document.getElementById("Finalist1").innerHTML = "";
    document.getElementById("Finalist2").innerHTML = "";
    if (document.getElementById("W61").innerHTML.localeCompare(updatedList[30]) == 0) {
        document.getElementById("Finalist1").innerHTML = "<img class=\"trophy\" src=\"trophy.png\" alt=\"World Cup Qatar 2022\">";
    }
    else if (document.getElementById("W62").innerHTML.localeCompare(updatedList[30]) == 0) {
        document.getElementById("Finalist2").innerHTML = "<img class=\"trophy\" src=\"trophy.png\" alt=\"World Cup Qatar 2022\">";
    }
}

