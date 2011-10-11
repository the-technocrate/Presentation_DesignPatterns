package com.demo.mvp.web.client.presenter;

import com.demo.mvp.web.client.GreetingService;
import com.demo.mvp.web.client.GreetingServiceAsync;
import com.demo.mvp.web.client.model.HomeBean;
import com.demo.mvp.web.client.view.Home;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.AsyncCallback;

public class HomePresenter {
	public Home home = null;
	public HomePresenter(Home home) {
		this.home = home;
	}
	
	public void clickOnMe(final String actionCommand){
		final HomeBean bean = new HomeBean();
		GreetingServiceAsync service = (GreetingServiceAsync) GWT.create(GreetingService.class);
		
		AsyncCallback<String> callback = new AsyncCallback<String>() {

            public void onFailure(Throwable t) {
            	t.printStackTrace();
                // display error text if we can't get the quote:
                bean.setMessage("Failed to get a quote");
            }

            public void onSuccess(String result) {
                bean.setMessage(result);
            }
        };
		service.getQuote(callback);
		
		home.setHomeTitle(bean.getMessage());//Bean is not used properly here. 
											//However think in some other complex terms where we need to bring out some property from bean and to set view accordingly.
	}
}
