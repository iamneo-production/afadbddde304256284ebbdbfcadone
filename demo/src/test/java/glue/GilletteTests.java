package glue;

import java.net.MalformedURLException;
import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.slf4j.Logger;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.Scenario;
import pages.Homepage;
import runner.Base;
import utils.LoggerHandler;
import utils.Reporter;

public class GilletteTests {
    private static ExtentReports reporter;
    private WebDriver driver;
    Homepage homePage = new Homepage();
    Base base = new Base();
    Logger log = LoggerHandler.log;

    @Before
    public void setUp() throws MalformedURLException {
        if (reporter == null) {
            reporter = Reporter.generateExtentReport("gillette_report");
        }

        driver = base.openBrowser();
        driver.manage().window().maximize();
    }

    @Given("I am on the Gillette website")
    public void iAmOnTheGilletteWebsite() {
        driver.get("https://www.gillette.co.in/en-in");
    }
    
    @When("^I hover on from the top navigation$")
    public void iHoverOnFromTheTopNavigation() throws MalformedURLException {
        ExtentTest test = reporter.createTest("hover Products", "Executing step 1");
        homePage.hoverToProducts(driver, test);
        log.info("Hovered");
    }

    @When("^I choose \"([^\"]*)\" under \"([^\"]*)\" from the drop-down$")
    public void iChooseUnderFromTheDropDown(String option, String dropdown) {
        ExtentTest test = reporter.createTest("click Brands", "Executing step 2");
        homePage.clickBrands(driver, test);
        log.info("Clicked MACH3");
    }

    
    @Then("^I should see \"([^\"]*)\" under the products list$")
    public void iShouldSeeUnderTheProductsList(String expectedText) {
        ExtentTest test = reporter.createTest("find Razor Turbo", "Executing step 3");
        homePage.findRazorTurbo(driver, test);
        log.info("Finding razor turbo");
        
    }

    @When("^I search for \"([^\"]*)\" using the search option$")
    public void iSearchForUsingTheSearchOption(String searchText) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        WebElement searchIcon = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"searchIcon\"]")));
        searchIcon.click();
        WebElement searchInput = driver.findElement(By.xpath("//*[@id=\"search-box-input\"]"));
        searchInput.sendKeys(searchText);
        searchInput.submit();
        log.info("Searched for " + searchText);
    }

    @Then("^I should see \"([^\"]*)\" at the top of the search results$")
    public void iShouldSeeAtTheTopOfTheSearchResults(String expectedText) {
        WebElement searchResults = driver.findElement(By.xpath("//*[@id=\"main-content\"]/div/h1"));
        String searchResultsText = searchResults.getText();
        log.info("Got the first result");
    }

    @When("^I click on \"([^\"]*)\" under \"([^\"]*)\" in the footer$")
    public void iClickOnUnderInTheFooter(String link, String section) {
        WebElement sectionElement = driver.findElement(By.xpath("//*[@id=\"footerContent\"]/div/div[1]/div[1]/ul/li[2]/a"));
        sectionElement.click();
    }

    @Then("^I should see \"([^\"]*)\" under the list of articles under styling$")
    public void iShouldSeeUnderTheListOfArticlesUnderStyling(String expectedText) {
        WebElement articlesList = driver.findElement(By.xpath("//*[@id=\"tabItem_1\"]"));
        String articlesListText = articlesList.getText();
    }

    @After(order=1)
    public void takeScreenshotOnFailure(Scenario scenario){

    String screenshotName = "Hi"+ scenario.getName().replaceAll(" ", "_");
			byte[] sourcePath = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(sourcePath, screenshotName);

    }
    @After(order=0)
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
        
        if (reporter != null) {
            reporter.flush();
        }
    }

}
