package com.demo.mvp.presenter;

import com.demo.mvp.model.HomeBean;
import com.demo.mvp.view.Home;

public class HomePresenter {
	public Home home = null;
	public HomePresenter(Home home) {
		this.home = home;
	}
	
	public void clickOnMe(final String actionCommand){
		HomeBean bean = new HomeBean();
		bean.setMessage("Click action is performed.");
		home.showMessage(bean.getMessage());//Bean is not used properly here. 
											//However think in some other complex terms where we need to bring out some property from bean and to set view accordingly.
	}
}
