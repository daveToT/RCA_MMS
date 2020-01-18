/**
 * Request URL: https://awmm.coding.net/api/project/239763/issues/backlog?page=1
 * Request Method: GET
 */
const data1 = {
    code: 0,
    msg: null,
    data: {
        // Backblog每个列表展示的内容
        "list|6": [{
            type: "REQUIREMENT",
            "code|+1": 85,
            name: "@cname",
            description: false,
            priority: 1,
            assignee: null,
            subTasks: [],
            epic: null,
            storyPoint: null
        }
        ],
        page: 1,
        pageSize: 100,
        totalPage: 1,
        totalRow: 8,
        unplannedTotal: 8,
        storyPoints: null
    }
}


/**
 * Request URL: https://awmm.coding.net/api/project/239763/iterations/backlog?
 * Request Method: GET
 */

const data2 = {
    code: 0,
    msg: null,
    data: [
        // 每个容器，数据格式
        {
            issues: { storyPoints: null, total: 1, filtered: 1 },
            code: 95,
            name: "的",
            goal: "",
            startAt: null,
            endAt: null,
            creator: {
                id: 163471,
                status: 1,
                globalKey: "MntGwPSAwz",
                avatar: "https://coding-net-production-static-ci.codehub.cn/WM-TEXT-AVATAR-iSmAvDgouKCHZRuYkFeP.jpg",
                name: "蒋猛",
                email: "1486950363@qq.com"
            },
            status: "WAIT_PROCESS",
            waitProcessCount: 1,
            processingCount: 0,
            completedCount: 0,
            remainingDays: 0,
            completedPercent: 0,
            createdAt: 1579148789000,
            updatedAt: 1579148789000,
            assignee: null,
            watchers: [],
            project: {
                owner_id: 0,
                created_at: 1569465323000,
                updated_at: 1569465323000,
                deleted_at: "1970-01-01 00:00:00.0",
                status: 1,
                recommended: 0,
                depot_shared: false,
                type: 2,
                max_member: 0,
                name: "coding-demo",
                display_name: "示例项目",
                name_pinyin: "slxm|shlxm|shilixiangmu",
                description: "CODING 示例项目",
                icon: "https://dn-coding-net-production-pp.codehub.cn/79a8bcc4-d9cc-4061-940d-5b3bb31bf571.png",
                plan: 1,
                user_owner_id: 0,
                team_owner_id: 111935,
                start_date: null,
                end_date: null,
                project_file_quota: 204800,
                id: 239763,
                backend_project_path: "/team/awmm/project/coding-demo",
                owner_user_name: "awmm",
                project_path: "/p/coding-demo",
                public: false,
                html_url: "https://awmm.coding.net/p/coding-demo"
            }
        }
    ]
}

/**
 * 迭代点击展开
 * Request URL: https://awmm.coding.net/api/project/239763/issues/backlog?iterationCode=95
 * Request Method: GET
 * iter其中一个容器数据
 */

const data3 = {
    code: 0,
    msg: null,
    data: {
        list: [
            // 该容器中中数据格式
            {
                type: "REQUIREMENT",
                code: 86,
                name: "f'd's'f's'd",
                description: false,
                priority: 1,
                assignee: null,
                subTasks: [],
                epic: null,
                storyPoint: null
            }
        ],
        page: 1,
        pageSize: 100,
        totalPage: 1,
        totalRow: 2,
        unplannedTotal: 0,
        storyPoints: null
    }
}


const Mock = require('mockjs')
Mock.mock('/admin/logs','get',data1)
