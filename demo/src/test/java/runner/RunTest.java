package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

// import io.cucumber.junit.Cucumber;
// import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features",
				glue = "glue",
				plugin = {
					"pretty", 
					"json:Cucumber-Reports/CucumberReport.json",
					"rerun:Cucumber-Reports/rerun.txt",
					"html:Cucumber-Reports/CucumberReport.html", 
					"junit:junit_xml/CucumberReport.xml",
					"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:" 
					})
public class RunTest {
}