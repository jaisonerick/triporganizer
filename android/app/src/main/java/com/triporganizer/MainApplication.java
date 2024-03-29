package com.triporganizer;

import android.app.Application;

import com.airbnb.android.react.maps.MapsPackage;
import com.crashlytics.android.answers.Answers;
import com.facebook.react.ReactApplication;
import com.kevinejohn.RNMixpanel.RNMixpanel;
import com.reactnative.photoview.PhotoViewPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.keyee.pdfview.PDFView;
import com.BV.LinearGradient.LinearGradientPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import io.fabric.sdk.android.Fabric;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNMixpanel(),
            new PhotoViewPackage(),
            new RNFetchBlobPackage(),
            new PDFView(),
            new LinearGradientPackage(),
            new VectorIconsPackage(),
            new MapsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Fabric.with(new Fabric.Builder(this).kits(new Answers()).debuggable(true).build());
    SoLoader.init(this, /* native exopackage */ false);
  }
}
