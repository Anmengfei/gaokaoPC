<template>
    <div class="skeleton">
        <div class="g-list list">
            <ul class="g-list-items">
                <div class="item" v-for="(item, index) in cjList" @click="selectSchoolItem(index, item)">
                    <div class="school-item clearfix">
                        <div class="meta">
                            <div class="avator">
                                <img :src="item.url" width="50" height="50" />
                                <div class="vip">
                                    录取概率
                                    <br />
                                    VIP可见
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <h3 class="title">
                                <span class="title-name theme-hover-primary">{{item.title}}</span>
                                <span class="title-location"{{item.desc}}></span>
                            </h3>
                            <div class="description">
                                <div class="clearfix">
                                    <ol class="tags">
                                        <li class="jsx-3107542786" v-for="(item2, index) in item.tags">
                                            {{item2}}
                                        </li>
                                    </ol>
                                    <ol class="info">
                                        <li class="jsx-3107542786" >
                                            <span class="jsx-3107542786">2020年招生人数</span>
                                            <span class="value">{{item.value}}</span>
                                        </li>
                                        <li class="jsx-3107542786" >
                                            <span class="jsx-3107542786">选考科目</span>
                                            <span class="value">{{item.selectSubject}}</span>
                                        </li>
                                        <li class="jsx-3107542786" >
                                            <span class="jsx-3107542786">2020年最低分</span>
                                            <span class="value">{{item.lowestScore}}</span>
                                        </li>
                                        <li class="jsx-3107542786" >
                                            <span class="jsx-3107542786">2020年最低位次</span>
                                            <span class="value">{{item.lowestRanking}}</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        
                        <div class="action">
                            <button type="button" class="btn hollow small">
                                "专业"
                                <span class="count">{{item.count}}</span>
                                <i class="el-icon-caret-bottom"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>

