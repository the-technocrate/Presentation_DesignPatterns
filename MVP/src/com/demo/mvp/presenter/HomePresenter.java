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
		home.clickOnMe(bean);
	}
}
