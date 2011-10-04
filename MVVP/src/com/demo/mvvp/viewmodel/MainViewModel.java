package com.demo.mvvp.viewmodel;

public class MainViewModel {
	
	private static MainViewModel mainViewModel = null;
	private MainViewModel(){
		if(mainViewModel == null){
			mainViewModel = new MainViewModel();
		}
	}
	
	public static MainViewModel getInstance(){
		return mainViewModel;
	}
	
	
}
