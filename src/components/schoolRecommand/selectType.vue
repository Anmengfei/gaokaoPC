<template>
  <div class="box">
    <!-- tab:心仪的院校与喜欢的专业 -->
    <div class="box1">
      <el-tabs v-model="selectTabs" type="border-card" @tab-click="handleClick">
        <!-- 心仪的院校 -->
        <el-tab-pane label="心仪的院校" name="favoriteSchool">
          <div class="filter-list">
            <span class="filter-list-title">院校省份</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : active == ''}" @click="selecttag('')">不限</span>
              <span class="tag" v-for="item in provincesList" :key="item"
                    :class="{active : collegeselete.provinceSelect.includes(item)}"
                    @click="selecttag(item)">{{ item }}</span>
            </div>
          </div>
          <div class="filter-list">
            <span class="filter-list-title">院校类型</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : typeactive == ''}" @click="selecttypetag('')">不限</span>
              <span class="tag" v-for="(item,index) in collegeType" :key="index"
                    :class="{active : collegeselete.typeSelect.includes(item) }"
                    @click="selecttypetag(item)">{{ item }}</span>
            </div>
          </div>
          <div class="filter-list">
            <span class="filter-list-title">院校层次</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : levelactive == ''}" @click="selectleveltag('')">不限</span>
              <span class="tag" v-for="item in collegeLevel" :key="item"
                    :class="{active :collegeselete.levelSelect.includes(item)}"
                    @click="selectleveltag(item)">{{ item }}</span>
            </div>
          </div>
          <!--          <div  class="filter-list">-->
          <!--            <span class="filter-list-title">院校排序</span>-->
          <!--            <div class="filter-list-tags">-->
          <!--              <span class="tag" :class="{active : sortactive == ''}" @click="selectsorttag('')">不限</span>-->
          <!--              <span class="tag" v-for="item in collegeSortType" :key="item" :class="{active :collegeselete.sortSelect.includes(item)}" @click="selectsorttag(item)">{{item}}</span>-->
          <!--            </div>-->
          <!--          </div>-->
          <!-- <div class="customer-college">
            <span class="customer-college-title">自主院校：</span>
            <div class="customer-college-input">
              <el-autocomplete
                style="width: 320px"
                class="inline-input"
                v-model="collegename"
                :fetch-suggestions="querySearch"
                placeholder="请输入院校名称"
                :trigger-on-focus="false"
                @select="handleSelect"
              >
                <template slot-scope="{ item }">
                  <el-row>
                    <el-col :span="20" class="colleges">
                      <span>{{ item.schoolName }}</span>
                    </el-col>
                    <el-col :span="4" style="float: right"  class="text-right" >
                      <el-button type="text">
                        <img src="../../assets/guanzhu.png" style="margin-top:-.02rem" alt="">&nbsp;关注</el-button>
                    </el-col>
                  </el-row>
                </template>
              </el-autocomplete>
            </div>
            <div class="customer-filter-drop-wrapper">
              <el-checkbox v-model="checkAll" @change="handleCheckAllChange" style="margin-right: 10px"></el-checkbox>
              <el-dropdown
                trigger="hover"
                :hide-on-click=false
              >
                <span>用户关注({{ followCollege.length }}) <i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown" class="dropdown" v-if="followCollege.length">
                  <el-checkbox-group  v-model="checkList" v-for="item in followCollege" :key="item.id"  @change="handleCheckedfollowChange" >
                    <el-dropdown-item>
                      <el-checkbox :label="item.followName">{{ item.followName }}</el-checkbox>
                    </el-dropdown-item>
                  </el-checkbox-group>
                  <div class="tzy-dropdown-action">
                    <el-button type="primary" size="mini" @click="followSearch">确定</el-button>
                  </div>
                </el-dropdown-menu>
                <el-dropdown-menu slot="dropdown" class="dropdown1" v-else>
                  <div style="text-align: center">
                    <span style="text-align: center;position: absolute;left: 30%;font-size: 14px">暂无关注</span>
                    <img src="@/assets/empty.png" alt="">
                  </div>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div> -->
          <div class="myFilterRecordBlockRow">
            <div class="customer-selected-tags">
              <span class="title" style="line-height: 24px;">您已选择：</span>
              <div class="tags" v-for="select in collegeselete">
                <span class="tag" v-for="(item,index) in select" :key="index">
                  {{ item }}
                  <i class="el-icon-close" style="margin-left:5px" @click="closemyselect(select,item)"></i>
              </span>
              </div>
            </div>
          </div>
          <div class="schoollist" v-if="vip == 1">
            <el-row>
              <!-- schoolList.vue 心仪的院校 majorList.vue 喜欢的专业-->
              <el-col :span="19">
                <school-list :selected="collegeselete" :volform="volForm" @addform="getAddFormInfo" ></school-list>
              </el-col>
              <!-- 已填入意向侧边栏 -->
              <el-col :span="5">
                <div class="auto_fixed" :class="auto_fixed">
                  <div class="fudongBox">
                    <!-- <div class="head"><span>已填入意向</span><span class="subhead">(至少填报10个意向)</span></div> -->
                    <div class="head"><span>已填入意向</span></div>
                    <div class="content">
                      <div class="noformdata" v-if="volForm.length === 0">
                        <img src="../../assets/noData.png" alt="暂无数据">
                        <span>查看左侧院校和专业选择<br/>加入意向</span>
                      </div>
                      <div class="formdata" v-if="volForm.length > 0">
                        <div v-for="(item,index) in volForm" :key="index" class="list">
                          <div id="code">
                            <div class="num"><span>{{ index + 1 }}</span></div>
                          </div>
                          <div id="name">
                            <span class="school">{{ item.schoolName }}</span><br/>
                            <span class="major">{{ item.majorName }}</span>
                          </div>
                          <div class="deleteZhiyuan">
                            <i class="iconfont icon-shanchu1" @click="handleDeleteInfo(index)"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="foot">
                      <span class="clear" @click="clearFormData">清空</span>
                      <el-button class="nextbtn" type="text" @click="clickToZhiyuanBiao">下一步</el-button>
                      <div class="ChoiceIntention">
                        <el-dialog
                          :visible.sync="dialogVisible3"
                          width="20%"
                          :modal="false">
                          <i class="el-icon-warning"></i>
                          <span style="color:rgb(0, 0, 0);font-size:.28rem">请选择意向志愿</span>
                        </el-dialog>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>
              </el-col>
            </el-row>
          </div>
          <div class="schoollist" v-else>
            <el-row>
              <!-- schoolList.vue 心仪的院校 majorList.vue 喜欢的专业-->
              <el-col :span="19">
                <novipschool :selected="collegeselete" :volform="volForm" @addform="getAddFormInfo"></novipschool>
<!--                <novipmajor :selected="collegeselete" :volform="volForm" @addform="getAddFormInfo" v-else></novipmajor>-->
              </el-col>
              <!-- 已填入意向侧边栏 -->
              <el-col :span="5">
                <div class="auto_fixed" :class="auto_fixed">
                  <div class="fudongBox">
                    <!-- <div class="head"><span>已填入意向</span><span class="subhead">(至少填报10个意向)</span></div> -->
                    <div class="head"><span>已填入意向</span></div>
                    <div class="content">
                      <div class="noformdata" v-if="volForm.length === 0">
                        <img src="../../assets/noData.png" alt="暂无数据">
                        <span>查看左侧院校和专业选择<br/>加入意向</span>
                      </div>
                      <div class="formdata" v-if="volForm.length > 0">
                        <div v-for="(item,index) in volForm" :key="index" class="list">
                          <div id="code">
                            <div class="num"><span>{{ index + 1 }}</span></div>
                          </div>
                          <div id="name">
                            <span class="school">{{ item.schoolName }}</span><br/>
                            <span class="major">{{ item.majorName }}</span>
                          </div>
                          <div class="deleteZhiyuan">
                            <i class="iconfont icon-shanchu1" @click="handleDeleteInfo(index)"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="foot">
                      <span class="clear" @click="clearFormData">清空</span>
                      <!-- <button class="nextbtn" @click="clickToZhiyuanBiao">下一步</button> -->
                      <!-- <el-button class="nextbtn" type="text" @click="open">下一步</el-button> -->
                      <el-button class="nextbtn" type="text" @click="nextstepClick">下一步</el-button>
                      <el-dialog
                        :visible.sync="dialogVisible1"
                        width="30%"
                        :modal="false">
                        <i class="el-icon-warning"></i>
                        <span style="color:rgb(0, 0, 0);font-size:.28rem">VIP专属功能,开通后立即使用</span>
                        <span style="display:block" slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible1 = false">取 消</el-button>
                      <el-button type="primary" @click="openedClick()">立即开通</el-button>
                    </span>
                      </el-dialog>
                      <div class="ChoiceIntention">
                        <el-dialog
                          :visible.sync="dialogVisible2"
                          width="20%"
                          :modal="false">
                          <i class="el-icon-warning"></i>
                          <span style="color:rgb(0, 0, 0);font-size:.28rem">请选择意向志愿</span>
                        </el-dialog>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>
              </el-col>
            </el-row>

            <div>
              <div class="permission-tip-wrapper-toC">
                <p class="text-center">查看完整推荐院校</p>
                <div class="flex center">
                  <el-button type="danger" class="action" @click="gotoVIP"> 开通VIP &emsp;查看全部</el-button>
                </div>
                <div class="flex center qrcode">
                  <img src="../../assets/手机APP.png" alt="" width="80px" height="80px">
                  <div>
                    <p>扫码下载 考哪儿APP</p>
                    <p>实时资讯 一键填报</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <!-- 喜欢的专业 -->
        <el-tab-pane label="喜欢的专业" name="favoriteMajor">
          <div class="filter-list">
            <span class="filter-list-title">专业选择</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : majoractive == ''}" @click="selectmajortag('')">不限</span>
              <span class="tag" v-for="item in majorType" :key="item.category"
                    :class="{active : majoractive == item.category}"
                    @click="selectmajortag(item.category)">{{ item.category }}</span>
            </div>
          </div>
          <div class="filter-list" v-if="majoractive !== ''">
            <span class="filter-list-title" style="opacity: 0;">专业选择</span>
            <div class="filter-list-tags">
              <span class="tag" :class="{active : majorsecondactive == ''}" @click="selectmajorsecondtag('')">全部</span>
              <span class="tag" v-for="type in majorSecond" :key="type.name"
                    :class="{active :majorselect.includes(type.name)}"
                    @click="selectmajorsecondtag(type.name)">{{ type.name }}</span>
            </div>
          </div>
          <!-- <div class="customer-college">
            <span class="customer-college-title">我的关注：</span>
            <div class="customer-college-input">
              <el-autocomplete
                style="width: 320px"
                class="inline-input"
                v-model="majorname"
                :fetch-suggestions="querymajorSearch"
                placeholder="请输入专业名称"
                :trigger-on-focus="false"
                @select="handleMajorSelect"
              >
                <template slot-scope="{ item }">
                  <el-row>
                    <el-col :span="20" class="colleges">
                      <span>{{ item.name }}</span>
                    </el-col>
                    <el-col :span="4" style="float: right" class="text-right">
                      <el-button type="text">
                        <img src="../../assets/guanzhu.png" style="margin-top:-.02rem" alt="">&nbsp;关注
                      </el-button>
                    </el-col>
                  </el-row>
                </template>
              </el-autocomplete>
            </div>
            <div class="customer-filter-drop-wrapper">
              <el-checkbox v-model="checkmajorAll" @change="handlemajorCheckAllChange" style="margin-right: 10px"></el-checkbox>
              <el-dropdown
                trigger="hover"
                :hide-on-click=false
              >
                <span>用户关注({{ followMajor.length }}) <i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown" class="dropdown" v-if="followMajor.length>0">
                  <el-checkbox-group v-model="checkmajorList" v-for="item in followMajor" :key="item.id"  @change="handlemajorCheckedfollowChange">
                    <el-dropdown-item>
                      <el-checkbox :label="item.followName">{{ item.followName }}</el-checkbox>
                    </el-dropdown-item>
                  </el-checkbox-group>
                  <div class="tzy-dropdown-action">
                    <el-button type="primary" size="mini" @click="followMajorSearch">确定</el-button>
                  </div>
                </el-dropdown-menu>
                <el-dropdown-menu slot="dropdown" class="dropdown1" v-else>
                  <div style="text-align: center">
                    <span style="text-align: center;position: absolute;left: 30%;font-size: 14px">暂无关注</span>
                    <img src="@/assets/empty.png" alt="">
                  </div>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div> -->
          <div class="myFilterRecordBlockRow">
            <div class="customer-selected-tags">
              <span class="title" style="line-height: 24px;">您已选择：</span>
              <div class="tags">
                <span class="tag" v-for="(item,index) in majorselect" :key="index">
                  {{ item }}
                  <i class="el-icon-close" style="margin-left:5px" @click="closemajorselect(index)"></i>
              </span>
              </div>
            </div>
          </div>
          <div class="schoollist" v-if="vip == 1">
            <el-row>
              <!-- schoolList.vue 心仪的院校 majorList.vue 喜欢的专业-->
              <el-col :span="19">
<!--                <school-list :selected="collegeselete" :volform="volForm" @addform="getAddFormInfo" v-if="selectTabs == 'favoriteSchool'"></school-list>-->
                <MajorList :selected="collegeselete" :volform="volForm" @addform="getAddFormInfo" ></MajorList>
              </el-col>
              <!-- 已填入意向侧边栏 -->
              <el-col :span="5">
                <div class="auto_fixed" :class="auto_fixed">
                  <div class="fudongBox">
                    <!-- <div class="head"><span>已填入意向</span><span class="subhead">(至少填报10个意向)</span></div> -->
                    <div class="head"><span>已填入意向</span></div>
                    <div class="content">
                      <div class="noformdata" v-if="volForm.length === 0">
                        <img src="../../assets/noData.png" alt="暂无数据">
                        <span>查看左侧院校和专业选择<br/>加入意向</span>
                      </div>
                      <div class="formdata" v-if="volForm.length > 0">
                        <div v-for="(item,index) in volForm" :key="index" class="list">
                          <div id="code">
                            <div class="num"><span>{{ index + 1 }}</span></div>
                          </div>
                          <div id="name">
                            <span class="school">{{ item.schoolName }}</span><br/>
                            <span class="major">{{ item.majorName }}</span>
                          </div>
                          <div class="deleteZhiyuan">
                            <i class="iconfont icon-shanchu1" @click="handleDeleteInfo(index)"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="foot">
                      <span class="clear" @click="clearFormData">清空</span>
                      <el-button class="nextbtn" type="text" @click="clickToZhiyuanBiao">下一步</el-button>
                      <div class="ChoiceIntention">
                        <el-dialog
                          :visible.sync="dialogVisible3"
                          width="20%"
                          :modal="false">
                          <i class="el-icon-warning"></i>
                          <span style="color:rgb(0, 0, 0);font-size:.28rem">请选择意向志愿</span>
                        </el-dialog>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>
              </el-col>
            </el-row>
          </div>
          <div class="schoollist" v-else>
            <el-row>
              <!-- schoolList.vue 心仪的院校 majorList.vue 喜欢的专业-->
              <el-col :span="19">
<!--                <novipschool :selected="collegeselete" :volform="volForm" @addform="getAddFormInfo" v-if="selectTabs == 'favoriteSchool'" ></novipschool>-->
                <novipmajor :selected="collegeselete" :volform="volForm" @addform="getAddFormInfo"></novipmajor>
              </el-col>
              <!-- 已填入意向侧边栏 -->
              <el-col :span="5">
                <div class="auto_fixed" :class="auto_fixed">
                  <div class="fudongBox">
                    <!-- <div class="head"><span>已填入意向</span><span class="subhead">(至少填报10个意向)</span></div> -->
                    <div class="head"><span>已填入意向</span></div>
                    <div class="content">
                      <div class="noformdata" v-if="volForm.length === 0">
                        <img src="../../assets/noData.png" alt="暂无数据">
                        <span>查看左侧院校和专业选择<br/>加入意向</span>
                      </div>
                      <div class="formdata" v-if="volForm.length > 0">
                        <div v-for="(item,index) in volForm" :key="index" class="list">
                          <div id="code">
                            <div class="num"><span>{{ index + 1 }}</span></div>
                          </div>
                          <div id="name">
                            <span class="school">{{ item.schoolName }}</span><br/>
                            <span class="major">{{ item.majorName }}</span>
                          </div>
                          <div class="deleteZhiyuan">
                            <i class="iconfont icon-shanchu1" @click="handleDeleteInfo(index)"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="foot">
                      <span class="clear" @click="clearFormData">清空</span>
                      <!-- <button class="nextbtn" @click="clickToZhiyuanBiao">下一步</button> -->
                      <!-- <el-button class="nextbtn" type="text" @click="open">下一步</el-button> -->
                      <el-button class="nextbtn" type="text" @click="nextstepClick">下一步</el-button>
                      <el-dialog
                        :visible.sync="dialogVisible1"
                        width="30%"
                        :modal="false">
                        <i class="el-icon-warning"></i>
                        <span style="color:rgb(0, 0, 0);font-size:.28rem">VIP专属功能,开通后立即使用</span>
                        <span style="display:block" slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible1 = false">取 消</el-button>
                      <el-button type="primary" @click="openedClick()">立即开通</el-button>
                    </span>
                      </el-dialog>
                      <div class="ChoiceIntention">
                        <el-dialog
                          :visible.sync="dialogVisible2"
                          width="20%"
                          :modal="false">
                          <i class="el-icon-warning"></i>
                          <span style="color:rgb(0, 0, 0);font-size:.28rem">请选择意向志愿</span>
                        </el-dialog>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>
              </el-col>
            </el-row>

            <div>
              <div class="permission-tip-wrapper-toC">
                <p class="text-center">查看完整推荐院校</p>
                <div class="flex center">
                  <el-button type="danger" class="action" @click="gotoVIP"> 开通VIP &emsp;查看全部</el-button>
                </div>
                <div class="flex center qrcode">
                  <img src="../../assets/手机APP.png" alt="" width="80px" height="80px">
                  <div>
                    <p>扫码下载 考哪儿APP</p>
                    <p>实时资讯 一键填报</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 冲刺、稳妥、保底以及右边的侧边栏 -->
    <!-- VIP：心仪的院校和喜欢的专业 -->
<!--    <div class="schoollist" v-if="vip == 1">-->
<!--      <el-row>-->
<!--        &lt;!&ndash; schoolList.vue 心仪的院校 majorList.vue 喜欢的专业&ndash;&gt;-->
<!--        <el-col :span="19">-->
<!--          <school-list :selected="collegeselete" :volform="volForm" @addform="getAddFormInfo" v-if="selectTabs == 'favoriteSchool'"></school-list>-->
<!--          <MajorList :selected="collegeselete" :volform="volForm" @addform="getAddFormInfo" v-else></MajorList>-->
<!--        </el-col>-->
<!--        &lt;!&ndash; 已填入意向侧边栏 &ndash;&gt;-->
<!--        <el-col :span="5">-->
<!--          <div class="auto_fixed" :class="auto_fixed">-->
<!--            <div class="fudongBox">-->
<!--              &lt;!&ndash; <div class="head"><span>已填入意向</span><span class="subhead">(至少填报10个意向)</span></div> &ndash;&gt;-->
<!--              <div class="head"><span>已填入意向</span></div>-->
<!--              <div class="content">-->
<!--                <div class="noformdata" v-if="volForm.length === 0">-->
<!--                  <img src="../../assets/noData.png" alt="暂无数据">-->
<!--                  <span>查看左侧院校和专业选择<br/>加入意向</span>-->
<!--                </div>-->
<!--                <div class="formdata" v-if="volForm.length > 0">-->
<!--                  <div v-for="(item,index) in volForm" :key="index" class="list">-->
<!--                    <div id="code">-->
<!--                      <div class="num"><span>{{ index + 1 }}</span></div>-->
<!--                    </div>-->
<!--                    <div id="name">-->
<!--                      <span class="school">{{ item.schoolName }}</span><br/>-->
<!--                      <span class="major">{{ item.majorName }}</span>-->
<!--                    </div>-->
<!--                    <div class="deleteZhiyuan">-->
<!--                      <i class="iconfont icon-shanchu1" @click="handleDeleteInfo(index)"></i>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="foot">-->
<!--                <span class="clear" @click="clearFormData">清空</span>-->
<!--                <el-button class="nextbtn" type="text" @click="clickToZhiyuanBiao">下一步</el-button>-->
<!--                <div class="ChoiceIntention">-->
<!--                  <el-dialog-->
<!--                    :visible.sync="dialogVisible3"-->
<!--                    width="20%"-->
<!--                    :modal="false">-->
<!--                    <i class="el-icon-warning"></i>-->
<!--                    <span style="color:rgb(0, 0, 0);font-size:.28rem">请选择意向志愿</span>-->
<!--                  </el-dialog>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--    </div>-->
    <!-- 非VIP心仪的院校 -->
<!--    <div class="schoollist" v-else>-->
<!--      <el-row>-->
<!--        &lt;!&ndash; schoolList.vue 心仪的院校 majorList.vue 喜欢的专业&ndash;&gt;-->
<!--        <el-col :span="19">-->
<!--          <novipschool :selected="collegeselete" :volform="volForm" @addform="getAddFormInfo" v-if="selectTabs == 'favoriteSchool'" ></novipschool>-->
<!--          <novipmajor :selected="collegeselete" :volform="volForm" @addform="getAddFormInfo" v-else></novipmajor>-->
<!--        </el-col>-->
<!--        &lt;!&ndash; 已填入意向侧边栏 &ndash;&gt;-->
<!--        <el-col :span="5">-->
<!--          <div class="auto_fixed" :class="auto_fixed">-->
<!--            <div class="fudongBox">-->
<!--              &lt;!&ndash; <div class="head"><span>已填入意向</span><span class="subhead">(至少填报10个意向)</span></div> &ndash;&gt;-->
<!--              <div class="head"><span>已填入意向</span></div>-->
<!--              <div class="content">-->
<!--                <div class="noformdata" v-if="volForm.length === 0">-->
<!--                  <img src="../../assets/noData.png" alt="暂无数据">-->
<!--                  <span>查看左侧院校和专业选择<br/>加入意向</span>-->
<!--                </div>-->
<!--                <div class="formdata" v-if="volForm.length > 0">-->
<!--                  <div v-for="(item,index) in volForm" :key="index" class="list">-->
<!--                    <div id="code">-->
<!--                      <div class="num"><span>{{ index + 1 }}</span></div>-->
<!--                    </div>-->
<!--                    <div id="name">-->
<!--                      <span class="school">{{ item.schoolName }}</span><br/>-->
<!--                      <span class="major">{{ item.majorName }}</span>-->
<!--                    </div>-->
<!--                    <div class="deleteZhiyuan">-->
<!--                      <i class="iconfont icon-shanchu1" @click="handleDeleteInfo(index)"></i>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="foot">-->
<!--                <span class="clear" @click="clearFormData">清空</span>-->
<!--                &lt;!&ndash; <button class="nextbtn" @click="clickToZhiyuanBiao">下一步</button> &ndash;&gt;-->
<!--                &lt;!&ndash; <el-button class="nextbtn" type="text" @click="open">下一步</el-button> &ndash;&gt;-->
<!--                <el-button class="nextbtn" type="text" @click="nextstepClick">下一步</el-button>-->
<!--                <el-dialog-->
<!--                  :visible.sync="dialogVisible1"-->
<!--                  width="30%"-->
<!--                  :modal="false">-->
<!--                    <i class="el-icon-warning"></i>-->
<!--                    <span style="color:rgb(0, 0, 0);font-size:.28rem">VIP专属功能,开通后立即使用</span>-->
<!--                    <span style="display:block" slot="footer" class="dialog-footer">-->
<!--                      <el-button @click="dialogVisible1 = false">取 消</el-button>-->
<!--                      <el-button type="primary" @click="openedClick()">立即开通</el-button>-->
<!--                    </span>-->
<!--                </el-dialog>-->
<!--                <div class="ChoiceIntention">-->
<!--                  <el-dialog-->
<!--                    :visible.sync="dialogVisible2"-->
<!--                    width="20%"-->
<!--                    :modal="false">-->
<!--                    <i class="el-icon-warning"></i>-->
<!--                    <span style="color:rgb(0, 0, 0);font-size:.28rem">请选择意向志愿</span>-->
<!--                  </el-dialog>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>-->
<!--        </el-col>-->
<!--      </el-row>-->

<!--      <div>-->
<!--        <div class="permission-tip-wrapper-toC">-->
<!--             <p class="text-center">查看完整推荐院校</p>-->
<!--          <div class="flex center">-->
<!--            <el-button type="danger" class="action" @click="gotoVIP"> 开通VIP &emsp;查看全部</el-button>-->
<!--          </div>-->
<!--          <div class="flex center qrcode">-->
<!--            <img src="../../assets/手机APP.png" alt="" width="80px" height="80px">-->
<!--            <div>-->
<!--              <p>扫码下载 考哪儿APP</p>-->
<!--              <p>实时资讯 一键填报</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import axios from 'axios'
import SchoolList from '../schoolRecommand/schoolList'
import MajorList from '../schoolRecommand/majorList'
import novipschool from './novipschool'
import novipmajor from './novipmajor'
import {
  getAllLevel,
  getAllCollegeType,
  getAllprovinces,
  getsearchSchool,
  getsearchMajor,
  followSchool,
  followMajor,
  getAllFollowSchool,
  getAllFollowMajor, findMajorFollowOrNot,
  findSchoolFollowOrNot,
  getAllMajorType,
  getUserInfo
} from '@/api/index'
// import { getAllWishByListId2,getAllHandleWishId } from "@/api/WishList";
import { getAllWishByListId2, getAllHandleWishId } from '@/api/index'
import { changeWishListPC } from '../../api/WishList'
export default {
  name: 'selectType',
  components: {SchoolList, MajorList, novipschool, novipmajor},
  data () {
    return {
      userInfo: {},
      vip: this.$store.state.vip,
      checkList: [],
      checkmajorList: [],
      followCollege: [],
      followMajor: [],
      zhiyuanFormatList: [],
      checkAll: false,
      checkmajorAll: false,
      isIndeterminate: true,
      // phoneNum: '18551452231',
      majorname: '',
      collegename: '',
      auto_fixed: {
        fixed: false
      },
      collegeselete: {
        provinceSelect: [],
        typeSelect: [],
        levelSelect: [],
        // sortSelect:[],
        sortSelect: [],
        followSelect: [],
        followMajorSelect: []
      },
      majorselect: [],
      active: '',
      scroll: '',
      typeactive: '',
      levelactive: '',
      // sortactive: '',
      majorsecondactive: '',
      majoractive: '',
      majorType: {},
      provincesList: [],
      collegeType: [],
      collegeLevel: [],
      majorSecond: [],
      loginStatus: true,
      isVip: false,
      volForm: [], // 高考志愿表单
      schooladvice: [],
      majoradvice: [],
      majorflag: '',
      turnname: '',
      shuzuId: [],
      listId: 0,
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false
    }
  },
  created () {
    this.phoneNum = localStorage.getItem('phone')
  },
  computed: {
    selectTabs: {
      get () {
        if (this.$route.params.tab == 'favoriteSchool') {
          this.majorflag = true
        } else {
          this.majorflag = false
        }
        return this.$route.params.tab || 'favoriteSchool'
      },
      set () {
      }
    }
  },

  mounted () {
    this.init()
    this.getInfo()
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
    this.getProvincesinit()
    this.getcollegeType()
    this.getMajortypelist()
    this.getZhiyuanTableEdit()
  },

  methods: {
    init () {
      getAllFollowSchool({
        phoneNum: this.phoneNum
      }).then(res => {
        this.followCollege = res.data || []
      })
      getAllFollowMajor({
        phoneNum: this.phoneNum
      }).then(res => {
        this.followMajor = res.data || []
      })
      let params = {
        phoneNum: localStorage.getItem('phone')
      }
      getAllHandleWishId(params).then((res) => {
        this.listId = res.data
        let params = {
          listId: this.listId
        }
        getAllWishByListId2(params).then((res) => {
          if (res.msg === '成功') {
            this.volForm = res.data.wishes
          }
        })
      })
    },
    getInfo () {
      getUserInfo().then(res => {
        this.userInfo = res.data
        this.vip = this.userInfo.vip
        this.$store.dispatch('getVip', this.userInfo.vip)
      })
    },
    onScroll () {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      let height = 450
      this.auto_fixed = {
        auto_fixed: true,
        fixed: scrolled >= height
      }
    },
    reset () {
      this.collegeselete = {
        provinceSelect: [],
        typeSelect: [],
        levelSelect: []
        // sortSelect:[],
      }
      this.active = '',
      this.typeactive = '',
      this.levelactive = '',
      this.majorsecondactive = '',
      this.majoractive = ''
    },
    closemajorselect (index) {
      this.majorselect.splice(index, 1)
      if (this.majorselect.length === 0) {
        this.majorsecondactive = ''
      }
    },
    closemyselect (parent, name) {
      for (let i = 0; i < parent.length; i++) {
        if (parent[i] == name) {
          parent.splice(i, 1)
        }
      }
      if (parent.length == 0) {
        switch (parent) {
          case this.collegeselete.provinceSelect:this.active = ''; break
          case this.collegeselete.levelSelect:this.levelactive = ''; break
          case this.collegeselete.typeSelect:this.typeactive = ''; break
        }
      }
    },
    selecttag (item) {
      this.active = item
      if (item == '') {
        this.collegeselete.provinceSelect = []
      } else if (!this.collegeselete.provinceSelect.includes(item)) {
        this.collegeselete.provinceSelect.push(item)
      } else {
        for (let i = 0; i < this.collegeselete.provinceSelect.length; i++) {
          if (this.collegeselete.provinceSelect[i] == item) {
            this.collegeselete.provinceSelect.splice(i, 1)
          }
        }
      }
      if (this.collegeselete.provinceSelect.length == 0) {
        this.active = ''
      }
    },
    selecttypetag (item) {
      this.typeactive = item
      if (item == '') {
        this.collegeselete.typeSelect = []
      } else if (!this.collegeselete.typeSelect.includes(item)) {
        this.collegeselete.typeSelect.push(item)
      } else {
        for (let i = 0; i < this.collegeselete.typeSelect.length; i++) {
          if (this.collegeselete.typeSelect[i] == item) {
            this.collegeselete.typeSelect.splice(i, 1)
          }
        }
      }
      if (this.collegeselete.typeSelect.length == 0) {
        this.typeactive = ''
      }
    },
    selectleveltag (item) {
      this.levelactive = item
      if (item == '') {
        this.collegeselete.levelSelect = []
      } else if (!this.collegeselete.levelSelect.includes(item)) {
        this.collegeselete.levelSelect.push(item)
      } else {
        for (let i = 0; i < this.collegeselete.levelSelect.length; i++) {
          if (this.collegeselete.levelSelect[i] == item) {
            this.collegeselete.levelSelect.splice(i, 1)
          }
        }
      }
      if (this.collegeselete.levelSelect.length == 0) {
        this.levelactive = ''
      }
    },
    selectsorttag (item) {
      this.sortactive = item
      if (item == '') {
        this.collegeselete.sortSelect = []
      } else if (!this.collegeselete.sortSelect.includes(item)) {
        this.collegeselete.sortSelect.push(item)
      }
    },

    selectmajortag (item) {
      this.majoractive = item
      if (item == '') {
        this.majorselect = []
      }
      this.majorType.forEach(tag => {
        if (tag.category == item) {
          this.majorSecond = tag.firSubList
        }
      })
    },
    selectmajorsecondtag (item) {
      this.majorsecondactive = item
      if (item == '') {
        this.majorselect = []
      } else if (!this.majorselect.includes(item)) {
        this.majorselect.push(item)
      } else {
        for (let i = 0; i < this.majorselect.length; i++) {
          if (this.majorselect[i] == item) {
            this.majorselect.splice(i, 1)
          }
        }
      }
      if (this.majorselect.length == 0) {
        this.majorsecondactive = ''
      }
    },
    getProvincesinit () {
      getAllprovinces().then(res => {
        this.provincesList = res.data || []
      })
    },
    getcollegeType () {
      getAllCollegeType().then(res => {
        this.collegeType = res.data || []
      })
      getAllLevel().then(response => {
        this.collegeLevel = response.data
      })
    },
    getMajortypelist () {
      getAllMajorType().then(res => {
        this.majorType = res.data || []
      })
    },
    handleClick (tab, event) {
      // console.log('tab', tab)
      //
      // this.selectTabs = tab.name
      // console.log('tab', this.selectTabs)
      // if (this.turnname == 'favoriteSchool') {
      //   this.majorflag = true
      // } else {
      //   this.majorflag = false
      // }
      // this.$forceUpdate()
    },
    getAddFormInfo (message) {
      // 父子组件传值，父组件接收信息函数
      this.volForm.push(message)
    },
    clearFormData () { // 清空志愿表单
      this.$confirm('此操作将全部清空已填入意向且无法恢复, 是否继续?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.volForm = []
        this.$forceUpdate()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })

      // this.showvolformdata = true
      // this.volForm = []
      // this.$forceUpdate()
    },
    // 下一步按钮，转向新的界面
    // clickToZhiyuanBiao () {
    //   console.log('aaaaaaaaaaaaaaaa',parseInt(this.listId))
    //   console.log('ccccccccccccccc',this.volForm)
    //   let params={
    //     listId:this.listId,
    //     wishList:this.volForm
    //   };
    //   changeWishListPC(params).then((res)=>{
    //     console.log('PPPPPPPPPPPPPPPPPPPP',res)
    //   })

    //   var url = "https://www.zytb.top/NEMT/gk/userPC/changeWishListPC";
    //   axios.post(url,this.listId,JSON.stringify(this.volForm), {
    //     headers: {
    //       "Content-Type": "application/json;charset=UTF-8",
    //       token: localStorage.getItem("token"),
    //     },
    //   }).then((res)=>{

    //   })

    //   this.$router.push('/zhiyuanBiao')
    //   this.$router.push({
    //       name: 'zhiyuanBiao',
    //       params: {
    //         zhiyuanTable: this.volForm
    //       }
    //     })
    //   if (this.volForm.length > 10) {
    //     this.$router.push({
    //       name: 'zhiyuanBiao',
    //       params: {
    //         zhiyuanTable: this.volForm
    //       }
    //     })
    //   } else {
    //     this.$alert('<span style="font-size: .2rem">志愿表数据不能少于10条</span>', '', {
    //       dangerouslyUseHTMLString: true
    //     })
    //   }
    // },
    clickToZhiyuanBiao () { // 下一步按钮，转向新的界面
      if (this.volForm.length == 0) {
        this.dialogVisible3 = true
      } else {
        for (let i = 0; i < this.volForm.length; i++) {
          const map = {}
          map.chance = this.volForm[i].risk || this.volForm[i].chances
          map.id = 0
          map.listId = 0
          map.rank = i
          map.wishId = this.volForm[i].id
          map.wishNum = i
          this.zhiyuanFormatList.push(map)
        }
        var url = 'https://www.zytb.top/NEMT/gk/userPC/changeWishListPC'
        axios({
          method: 'post',
          url: url,
          params: {
            listId: this.listId
          },
          data: JSON.stringify(this.zhiyuanFormatList),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            token: localStorage.getItem('token')
          }
        }).then((res) => {
          this.$router.push('/zhiyuanBiao')
        })
      }
    },
    // 测试
    querySearch (queryString, cb) {
      getsearchSchool({
        schoolName: queryString
      }).then(res => {
        this.schooladvice = res.data
        cb(this.schooladvice)
      })
    },
    querymajorSearch (queryString, cb) {
      getsearchMajor({
        majorName: queryString
      }).then(res => {
        this.majoradvice = res.data || []
        cb(this.majoradvice)
      })
    },
    handleMajorSelect (item) {
      followMajor({
        majorName: item.name,
        phoneNum: this.phoneNum
      }).then(res => {
        if (res.code == 0) {
          this.msgSuccess('关注成功')
          this.init()
        } else if (res.code == 617) {
          this.msgWarning('用户已关注')
        }
      })
    },
    // handleCheckAllChange (val) {
    //   this.checkedCities = val ? cityOptions : []
    //   this.isIndeterminate = false
    // },
    handleSelect (item) {
      followSchool({
        phoneNum: this.phoneNum,
        schoolName: item.schoolName
      }).then(res => {
        if (res.code == 0) {
          this.msgSuccess('关注成功')
          this.init()
        } else if (res.code == 617) {
          this.msgWarning('用户已关注')
        }
      })
    },
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedfollowChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.followCollege.length
    },
    handlemajorCheckAllChange (val) {
      if (val) {
        this.followMajor.forEach(item => {
          this.checkmajorList.push(item.followName)
        })
      } else {
        this.checkmajorList = []
      }
    },
    handlemajorCheckedfollowChange (value) {
      let checkedCount = value.length
      this.checkmajorAll = checkedCount === this.followMajor.length
    },

    followSearch () {
      this.collegeselete.followSelect = this.checkList
    },
    followMajorSearch () {
      this.majorselect.push.apply(this.majorselect, this.checkmajorList)
    },
    handleDeleteInfo (index) { // 志愿表单删除
      this.volForm.splice(index, 1)
    },
    getZhiyuanTableEdit () {
      // console.log('修改志愿表单数据', this.$route.params.zhiyuanTable)
      // console.log('dsfsdfas', typeof sessionStorage.getItem('zhiyuanbiaodan'), sessionStorage.getItem('zhiyuanbiaodan'))
      // console.log("999999999",sessionStorage.getItem('zhiyuanbiaodan'))
      if (sessionStorage.getItem('zhiyuanbiaodan') !== null) {
        var temp = JSON.parse(sessionStorage.getItem('zhiyuanbiaodan'))
        this.volForm = temp
        // console.log("8888888888",this.volForm)
        this.$forceUpdate()
      }

      // if (temp.length > 0) {

      // JSON.parse(localStorage.getItem('zhiyuanbiaodan'))
      // this.$forceUpdate()
      // }
    },
    gotoVIP () {
      this.$router.push('/volunteerVIP')
    },
    openedClick () {
      this.$router.push('/volunteerVIP')
    },
    nextstepClick () {
      if (this.volForm.length == 0) {
        this.dialogVisible1 = false
        this.dialogVisible2 = true
      } else {
        this.dialogVisible1 = true
        this.dialogVisible2 = false
      }
    }
  }
}
</script>

<style scoped>
/deep/ .el-dialog__body {
  text-align: center;
  font-size: .25rem;

}
/deep/ .el-button{
  border-radius: .1rem;

}
/deep/ .el-dialog__footer{
   text-align: center;
   padding: .1rem .2rem .56rem;
}
/deep/ .el-dialog {
  border-radius: 0.12rem;

}
/deep/ .el-dialog__body {
    text-align: center;
    font-size: 0.3rem;
}

/deep/ .el-dialog__body {
    /* color: #606266; */
    color: rgb(255, 56, 55);
}
.ChoiceIntention /deep/ .el-dialog__header{
  padding: 0rem 0rem 0rem;

}
li{
  list-style: none;
}
.box {
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
}

.box1 {
  margin-top: 2%;
  background-color: #f3f5f7;
  font-size: 100%;
}

.schoollist {
  margin-top: .2rem;
}

.el-tabs--border-card > .el-tabs__header .el-tabs__item .is-active {
  /*color: #f95e5a;*/
  color: #e5623f;

}

/deep/ .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    background-color: #e5623f;
    color: #fff;
}

.filter-list {
  display: flex;
  padding: 10px 0;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB, Microsoft Yahei, sans-serif;
  align-items: flex-start;
  border-bottom: 1px dashed #e6e6e6;
}

.filter-list-title {
  color: #9b9b9b;
  font-size: 14px;
  margin-left: 2vw;
  margin-top: 10px;
  text-align: center;
}

.filter-list .filter-list-tags {
  flex: 1;
  -webkit-box-flex: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
}
.filter-list .filter-list-tags .tag {
  padding: 2px 6px;
  font-size: 12px;
  margin: 10px 15px;
  color: #212121;
  text-align: center;
  -webkit-box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
}

.filter-list .filter-list-tags .tag.active, .filter-list .filter-list-tags .tag:hover {
  color: #e9302d;
}

.filter-list .filter-list-tags .tag.active {
  border: 1px solid #e9302d;
}

.customer-college {
  padding-top: 20px;
  display: flex;
  -webkit-box-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB, Microsoft Yahei, sans-serif;

  align-items: center;
}

.customer-college .customer-college-title {
  font-size: 14px;
  margin-left: 2vw;
  color: #9b9b9b;
}

.customer-college .customer-college-title {
  font-size: 14px;
  margin-left: 2vw;
  color: #9b9b9b;
}

.customer-college .customer-college-input {
  width: 330px;
  float: left !important;
  margin-right: 10px !important;
  display: flex;
  /*flex: 1;*/
  /*position: relative;*/
  /*display: inline-block;*/
}

.customer-filter-drop-wrapper {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.dropdown {
  height: 2.16rem;
  width: 2.5rem;
  overflow: auto;
  overflow-x: hidden;
  transform-origin: center top;
  z-index: 2134;
  padding: 10px 0;
  margin: 5px 0;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

/deep/ .el-checkbox__label{
  width: 2.16rem;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  top: .05rem;

}

.tzy-dropdown-action {
  padding: 10px 10px 0 0;
  text-align: center;
  /* float: right; */
}

.text-right /deep/ .el-button{
  font-size: .1rem;
}

.colleges{
  overflow: hidden;
  text-overflow: ellipsis;
}

.myFilterRecordBlockRow {
  background: #fafafa;
  border: 1px solid #e5e5e5;
  margin-top: 15px;

  display: flex;
  height: auto;
  transition: height 2s ease-in-out;
  overflow: hidden;
}

.customer-selected-tags {
  -webkit-box-flex: 1;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB, Microsoft Yahei, sans-serif;
  font-size: 14px;
  margin-left: 2vw;
  color: #9b9b9b;
  flex: 1;
  min-height: 42px;
  padding: 6px 12px 6px 16px;
  display: flex;
  overflow: hidden;
}

.customer-selected-tags .title {
  font-size: 12px;
  color: #9b9b9b;
  line-height: 24px;
}

.box .fudongBox {
  position: absolute;
  top: .08rem;
  margin-left: .2rem;
  margin-top: .2rem;
  height: 8.1rem;
  /*overflow-y: auto;*/
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .3rem;
  width: 4rem;
  background-color: #fff;
}

.box .fudongBox .head {
  height: .8rem;
  border-bottom: .01rem solid rgba(0, 0, 0, 0.1);
  font-size: .27rem;
  line-height: .8rem;
  text-align: center;
}
/* .box .fudongBox .subhead{
  font-size: .2rem;
} */

.box .fudongBox .content {
  white-space: pre-wrap;
  word-wrap: break-word;
  height: 6.3rem;
  overflow-y: scroll;
}

.box .fudongBox .content img {
  margin-top: .8rem;
  margin-left: .7rem;
}

.box .fudongBox .content .noformdata span {
  display: block;
  text-align: center;
  margin-top: .4rem;
  margin-left: .3rem;
  color: #8a8a8a;
  font-size: .22rem;
}

.box .fudongBox .content .formdata .list {
  width: 100%;
  /*display: -webkit-flex; !* Safari *!*/
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /*换行，第一行在下方。*/
  word-break: break-word;
  padding-top: .25rem;
  padding-bottom: .25rem;
  /* height: .9rem; */
  /* margin-bottom: .3rem; */
  /* background-color: pink; */
  border-bottom: 1px dashed rgb(228, 228, 228);
}

.box .fudongBox .content .formdata #code {
  flex: 1;
  height: 100%;
}

#code .num {
  margin-left: .2rem;
  text-align: center;
  display: inline-block;
  background-color: #00aff0;
  font-size: .3rem;
  font-weight: 600;
  color: #ffffff;
  width: 50%;
  height: 50%;
}

.box .fudongBox .content .formdata #name{
  flex: 3;
  height:100%;
}
.box .fudongBox .content .formdata #name .school {
  color: rgba(0, 0, 0, 0.8);
  font-size: .23rem;
  font-weight: 700;
}

.box .fudongBox .content .formdata #name .major{
  color: rgba(0, 0, 0, 0.5);
  font-size: .19rem;
  font-weight: 400;
  padding-top: .05rem;
}
.box .fudongBox .content .formdata #option{
  flex: 1;
  height:100%;
}

.box .fudongBox .foot {
  height: .8rem;
  border-top: .01rem solid rgba(0, 0, 0, 0.1);
}

.box .fudongBox .clear {
  color: rgba(0, 0, 0, 0.5);
  font-size: .2rem;
  display: inline-block;
  line-height: .8rem;
  cursor: pointer;
  text-align: center;
  margin-left: .55rem;
  margin-top: .1rem;
}

.el-button {
  font-size: .20rem;
}
.box .fudongBox .nextbtn {
  background: #FF961F;
  color: #fff;
  border-radius: .1rem;
  height: .6rem;
  cursor: pointer;
  letter-spacing: 0;
  text-align: center;
  width: 1.6rem;
  border: 0;
  outline: 0;
  margin-left: .6rem;
}

.customer-selected-tags .tags {
  -webkit-box-flex: 1;
  flex: 0 1 auto;
  /*flex:1;*/
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
}

.customer-selected-tags .tags .tag {
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  font-size: 12px;
  color: #757575;
  letter-spacing: 0;
  height: 26px;
  line-height: 26px;
  margin-right: 6px;
  margin-bottom: 6px;
  user-select: none;
  padding: 0 10px;
}

.auto_fixed {

}

.deleteZhiyuan {
  margin-right: .2rem;
  padding-top: 3%;
  cursor:pointer;
}
.fixed {
  position: fixed;
  top: 0rem;
}

.permission-tip-wrapper-toC{
  background: #f2f2f2;
  width: 100%;
  padding: 30px 0;
  margin: 0 auto;
}
.text-center{
  font-size: 30px;
  font-weight: 550;
  text-align: center;
}
.flex{
  display: flex;
}

.center {
align-items: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.qrcode {
  margin-top: 20px;
}
.qrcode img{
  margin-right: 15px;
}
.action{
  font-size: 25px;
}
</style>
