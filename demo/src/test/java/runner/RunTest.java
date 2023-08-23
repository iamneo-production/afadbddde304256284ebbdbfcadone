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
		
					"html:Cucumber-Reports/CucumberReport.html", 
					
					
					})
public class RunTest {
}