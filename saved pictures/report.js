$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/colpatria.feature");
formatter.feature({
  "name": "colpatria",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@colpatria"
    }
  ]
});
formatter.scenarioOutline({
  "name": "entry avianca page and purchase a flight",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PurchaseFlightAvianca"
    }
  ]
});
formatter.step({
  "name": "entry to avianca",
  "keyword": "Given "
});
formatter.step({
  "name": "select origin city",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "\u003coriginCity\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "select destination city",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "\u003cdestinationCity\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "select travel dates",
  "keyword": "And "
});
formatter.step({
  "name": "click on search flights",
  "keyword": "And "
});
formatter.step({
  "name": "click continue in modal",
  "keyword": "And "
});
formatter.step({
  "name": "select second flight",
  "keyword": "And "
});
formatter.step({
  "name": "select one way flight price",
  "keyword": "And "
});
formatter.step({
  "name": "select return flight price",
  "keyword": "And "
});
formatter.step({
  "name": "fill out the user information",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "\u003cnombre\u003e",
        "\u003capellido\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "fill out the contact information",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "\u003ccorreo\u003e",
        "\u003ctelefono\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "click continue and pay",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "originCity",
        "destinationCity",
        "nombre",
        "apellido",
        "correo",
        "telefono"
      ]
    },
    {
      "cells": [
        "bogota",
        "medellin",
        "Pablo",
        "Guerra",
        "pabloGuerra@gmail.com",
        "3227893041"
      ]
    }
  ]
});
formatter.scenario({
  "name": "entry avianca page and purchase a flight",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@colpatria"
    },
    {
      "name": "@PurchaseFlightAvianca"
    }
  ]
});
formatter.step({
  "name": "entry to avianca",
  "keyword": "Given "
});
formatter.match({
  "location": "AviancaDefinitions.entry_to_avianca$()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat net.serenitybdd.core.pages.PageObject.openPageAtUrl(PageObject.java:902)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:803)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:791)\r\n\tat com.avianca.pages.AviancaStep.openApplication(AviancaStep.java:12)\r\n\tat com.avianca.pages.AviancaStep$$EnhancerByCGLIB$$3e92a5bb.CGLIB$openApplication$4(\u003cgenerated\u003e)\r\n\tat com.avianca.pages.AviancaStep$$EnhancerByCGLIB$$3e92a5bb$$FastClassByCGLIB$$556c2f80.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:478)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:463)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:438)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:179)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:166)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:72)\r\n\tat com.avianca.pages.AviancaStep$$EnhancerByCGLIB$$3e92a5bb.openApplication(\u003cgenerated\u003e)\r\n\tat com.avianca.definitions.AviancaDefinitions.entry_to_avianca$(AviancaDefinitions.java:16)\r\n\tat ✽.entry to avianca(feature/colpatria.feature:6)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 89\nCurrent browser version is 94.0.4606.61 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-N1CMAE7\u0027, ip: \u002710.13.24.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x003DE7D3+124883]\n\tOrdinal0 [0x003DE7B1+124849]\n\tGetHandleVerifier [0x00628688+193832]\n\tGetHandleVerifier [0x00643AC5+305509]\n\tGetHandleVerifier [0x0064021B+291003]\n\tGetHandleVerifier [0x0063E0AC+282444]\n\tGetHandleVerifier [0x00664A90+440624]\n\tGetHandleVerifier [0x006647FC+439964]\n\tGetHandleVerifier [0x0066154B+426987]\n\tGetHandleVerifier [0x00644FFD+310941]\n\tGetHandleVerifier [0x00645D8E+314414]\n\tGetHandleVerifier [0x00645D19+314297]\n\tGetHandleVerifier [0x007031EC+1089676]\n\tGetHandleVerifier [0x007017C9+1082985]\n\tGetHandleVerifier [0x007013A3+1081923]\n\tGetHandleVerifier [0x007FD9FD+2115741]\n\tOrdinal0 [0x0052B82E+1488942]\n\tOrdinal0 [0x004C5A7D+1071741]\n\tOrdinal0 [0x004C559B+1070491]\n\tOrdinal0 [0x004C54B1+1070257]\n\tOrdinal0 [0x004FFF53+1310547]\n\tBaseThreadInitThunk [0x779DFA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x77B57A9E+286]\n\tRtlGetAppContainerNamedObjectPath [0x77B57A6E+238]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat net.serenitybdd.core.pages.PageObject.openPageAtUrl(PageObject.java:902)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:803)\r\n\tat net.serenitybdd.core.pages.PageObject.open(PageObject.java:791)\r\n\tat com.avianca.pages.AviancaStep.openApplication(AviancaStep.java:12)\r\n\tat com.avianca.pages.AviancaStep$$EnhancerByCGLIB$$3e92a5bb.CGLIB$openApplication$4(\u003cgenerated\u003e)\r\n\tat com.avianca.pages.AviancaStep$$EnhancerByCGLIB$$3e92a5bb$$FastClassByCGLIB$$556c2f80.invoke(\u003cgenerated\u003e)\r\n\tat net.sf.cglib.proxy.MethodProxy.invokeSuper(MethodProxy.java:228)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:478)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:463)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:438)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:179)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:166)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:72)\r\n\tat com.avianca.pages.AviancaStep$$EnhancerByCGLIB$$3e92a5bb.openApplication(\u003cgenerated\u003e)\r\n\tat com.avianca.definitions.AviancaDefinitions.entry_to_avianca$(AviancaDefinitions.java:16)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 89\nCurrent browser version is 94.0.4606.61 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-N1CMAE7\u0027, ip: \u002710.13.24.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x003DE7D3+124883]\n\tOrdinal0 [0x003DE7B1+124849]\n\tGetHandleVerifier [0x00628688+193832]\n\tGetHandleVerifier [0x00643AC5+305509]\n\tGetHandleVerifier [0x0064021B+291003]\n\tGetHandleVerifier [0x0063E0AC+282444]\n\tGetHandleVerifier [0x00664A90+440624]\n\tGetHandleVerifier [0x006647FC+439964]\n\tGetHandleVerifier [0x0066154B+426987]\n\tGetHandleVerifier [0x00644FFD+310941]\n\tGetHandleVerifier [0x00645D8E+314414]\n\tGetHandleVerifier [0x00645D19+314297]\n\tGetHandleVerifier [0x007031EC+1089676]\n\tGetHandleVerifier [0x007017C9+1082985]\n\tGetHandleVerifier [0x007013A3+1081923]\n\tGetHandleVerifier [0x007FD9FD+2115741]\n\tOrdinal0 [0x0052B82E+1488942]\n\tOrdinal0 [0x004C5A7D+1071741]\n\tOrdinal0 [0x004C559B+1070491]\n\tOrdinal0 [0x004C54B1+1070257]\n\tOrdinal0 [0x004FFF53+1310547]\n\tBaseThreadInitThunk [0x779DFA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x77B57A9E+286]\n\tRtlGetAppContainerNamedObjectPath [0x77B57A6E+238]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:147)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:53)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:49)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 57 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "select origin city",
  "rows": [
    {
      "cells": [
        "bogota"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AviancaDefinitions.select_origin_city(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select destination city",
  "rows": [
    {
      "cells": [
        "medellin"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AviancaDefinitions.select_destination_city(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select travel dates",
  "keyword": "And "
});
formatter.match({
  "location": "AviancaDefinitions.select_travel_dates()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search flights",
  "keyword": "And "
});
formatter.match({
  "location": "AviancaDefinitions.click_on_search_flights()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click continue in modal",
  "keyword": "And "
});
formatter.match({
  "location": "AviancaDefinitions.click_continue_in_modal()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select second flight",
  "keyword": "And "
});
formatter.match({
  "location": "AviancaDefinitions.select_second_flight()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select one way flight price",
  "keyword": "And "
});
formatter.match({
  "location": "AviancaDefinitions.select_one_way_flight_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select return flight price",
  "keyword": "And "
});
formatter.match({
  "location": "AviancaDefinitions.select_return_flight_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "fill out the user information",
  "rows": [
    {
      "cells": [
        "Pablo",
        "Guerra"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AviancaDefinitions.fill_out_the_user_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "fill out the contact information",
  "rows": [
    {
      "cells": [
        "pabloGuerra@gmail.com",
        "3227893041"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AviancaDefinitions.fill_out_the_contact_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click continue and pay",
  "keyword": "And "
});
formatter.match({
  "location": "AviancaDefinitions.click_continue_and_pay()"
});
formatter.result({
  "status": "skipped"
});
});