package com.jnshu.mapper;

import com.jnshu.model.Banner;
import com.jnshu.model. Banner;

import java.util.List;

public interface BannerDao {

    public long addBanner(Banner banner);

    public boolean deleteBanner(long id);

    public boolean updateBanner( Banner banner);

    public  Banner findByBanner(long id);

    public List<Banner> findAllBanner();
    
}
