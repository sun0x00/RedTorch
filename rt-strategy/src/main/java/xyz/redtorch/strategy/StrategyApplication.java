package xyz.redtorch.strategy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.web.bind.annotation.RestController;

import xyz.redtorch.core.rmi.configuration.RMIClientConfiguration;
import xyz.redtorch.core.zeus.impl.ZeusTradingEngineServiceImpl;


@SpringBootApplication(scanBasePackages = {"xyz.redtorch.strategy"})
@RestController
@Import({RMIClientConfiguration.class,ZeusTradingEngineServiceImpl.class})
public class StrategyApplication {
    @Bean 
    public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
    	return new PropertySourcesPlaceholderConfigurer();
    }
	public static void main(String[] args) {
		SpringApplication.run(StrategyApplication.class, args);
	}
}