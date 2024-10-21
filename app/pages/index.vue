<template>


  <div class="relative flex flex-col justify-between p-4 page-bg h-screen System-Font">
    <div class="flex items-center">
      <img :src="versionData.APPLOGO" draggable="false" alt="logo" class="w-16 h-16 mr-4 rounded-xl">
      <div>
        <div class="title text-2xl font-semibold text-white">{{ versionData.NAME }}</div>
        <div class="text-base text-white font-semibold">{{ versionData.INTRODUCTION }}</div>
      </div>
    </div>
    <a-divider />
    <a-card class="flex-grow overflow-auto bg-white h-full" :bordered="false">
      <div class="flex justify-between items-center h-full">
        <a-tabs v-model:activeKey="activeKey" type="rounded" class="h-full" animation>
          <template #extra>
            <a-popover position="br">
              <a-button type="primary" class="hidden-on-mobile" size="small">
                <template #icon>
                  <icon-scan />
                </template>
              </a-button>
              <template #content>
                <div class="flex flex-col items-center justify-center">
                  <QrcodeVue :value="url" :size="120" />
                  <div class="text-sm font-semibold mt-2">手机扫描二维码安装</div>
                </div>
              </template>
            </a-popover>
          </template>
          <a-tab-pane key="welcome">
            <template #title>
              描述
            </template>
            <div class="flex flex-col sm:flex-row h-full">
              <div class="flex-1 h-full order-first sm:order-last">
                <div class="flex flex-col items-center justify-center h-full">
                  <img class="w-1/3 my-6" :src="versionData.APPLOGO" />
                  <div class="text-base mb-8 font-medium">
                    {{ versionData.DESCRIPTION }}
                  </div>
                </div>
              </div>
              <div class="w-full overflow-auto scrollable h-full sm:w-1/2">
                <div class="mb-10">
                <Markdown :content="welcomeContent" />
              </div>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="mac" v-if="versionData.MAC_VERSION">
            <template #title>
              MacOS
            </template>
            <a-row class="overflow-auto scrollable h-full" justify="center" align="center">
              <a-col :xs="24" :lg="10">
                <div class="flex flex-col items-center justify-center scrollable">
                  <img class="w-1/3 mt-10" src="@/assets/img/mac.png" />
                  <a-space>
                    <a-button type="primary" size="large" v-if="versionData.MACARM_CLIENT"
                      @click="navigateToUrl(versionData.MACARM_CLIENT)">
                      <template #icon>
                        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M23.9111 11.3176C23.9931 9.08606 24.6201 7.12594 25.7772 5.4874C26.9402 3.84056 28.8628 2.6707 31.4945 2.00781C31.512 2.08885 31.5302 2.16994 31.5491 2.25072V2.67472C31.5491 3.63616 31.3159 4.73862 30.8556 5.95127C30.3732 7.12541 29.6193 8.23048 28.618 9.22782C27.6815 10.1066 26.8151 10.6884 26.0494 10.9514C25.7966 11.0269 25.45 11.1012 25.0314 11.1681C24.6591 11.2261 24.2856 11.276 23.9111 11.3176Z"
                            fill="#ffffff" />
                          <path
                            d="M24.3502 14.629C21.3775 14.629 19.3136 11.9999 16.3813 11.9999C13.4491 11.9999 7.4082 14.6951 7.4082 23.9999C7.4082 33.3047 12.7726 39.2999 13.3726 39.9999C13.9725 40.7 15.3601 42.4994 17.5098 42.4994C19.6596 42.4994 22.0131 40.7902 24.3502 40.7902C26.6872 40.7902 29.6288 42.4994 31.5492 42.4994C33.4696 42.4994 34.2595 41.7165 35.5665 40.3662C36.8734 39.0159 39.3663 34.8952 40.2369 32.422C38.8029 31.5684 35.0021 29.2511 35.0021 23.9999C35.0021 20.4992 36.2814 17.5909 38.8401 15.2752C37.1615 13.0917 35.2147 11.9999 32.9996 11.9999C29.6769 11.9999 27.3229 14.629 24.3502 14.629Z"
                            fill="#ffffff" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" />
                        </svg>
                      </template>
                      Apple
                    </a-button>
                    <a-button type="primary" size="large" v-if="versionData.MACX64_CLIENT"
                      @click="navigateToUrl(versionData.MACX64_CLIENT)">
                      <template #icon>
                        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M23.9111 11.3176C23.9931 9.08606 24.6201 7.12594 25.7772 5.4874C26.9402 3.84056 28.8628 2.6707 31.4945 2.00781C31.512 2.08885 31.5302 2.16994 31.5491 2.25072V2.67472C31.5491 3.63616 31.3159 4.73862 30.8556 5.95127C30.3732 7.12541 29.6193 8.23048 28.618 9.22782C27.6815 10.1066 26.8151 10.6884 26.0494 10.9514C25.7966 11.0269 25.45 11.1012 25.0314 11.1681C24.6591 11.2261 24.2856 11.276 23.9111 11.3176Z"
                            fill="#ffffff" />
                          <path
                            d="M24.3502 14.629C21.3775 14.629 19.3136 11.9999 16.3813 11.9999C13.4491 11.9999 7.4082 14.6951 7.4082 23.9999C7.4082 33.3047 12.7726 39.2999 13.3726 39.9999C13.9725 40.7 15.3601 42.4994 17.5098 42.4994C19.6596 42.4994 22.0131 40.7902 24.3502 40.7902C26.6872 40.7902 29.6288 42.4994 31.5492 42.4994C33.4696 42.4994 34.2595 41.7165 35.5665 40.3662C36.8734 39.0159 39.3663 34.8952 40.2369 32.422C38.8029 31.5684 35.0021 29.2511 35.0021 23.9999C35.0021 20.4992 36.2814 17.5909 38.8401 15.2752C37.1615 13.0917 35.2147 11.9999 32.9996 11.9999C29.6769 11.9999 27.3229 14.629 24.3502 14.629Z"
                            fill="#ffffff" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" />
                        </svg>
                      </template>
                      Intel
                    </a-button>
                  </a-space>

                  <a-button-group class="mt-6" type="secondary">
                    <a-button>
                      <template #icon>
                        <icon-command />
                      </template>
                      {{ versionData.MAC_VERSION }}
                    </a-button>
                    <a-button>
                      <template #icon>
                        <icon-cloud />
                      </template>
                      {{ versionData.MAC_SIZE }}
                    </a-button>
                    <a-button>
                      <template #icon>
                        <icon-schedule />
                      </template>
                      {{ versionData.MAC_DATE }}
                    </a-button>
                  </a-button-group>
                </div>
              </a-col>
              <a-col :xs="24" :lg="14">
                <div class="flex flex-col items-center my-10">
                  <div class="overflow-x-auto space-nowrap">
                    <div class="inline-flex space-x-4 rounded-xl">
                      <img v-for="(screenshot, index) in versionData.MAC_SCREENSHOTS" :key="index" :src="screenshot"
                        alt="Screenshot" class="rounded-xl  w-auto object-contain" />
                    </div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="windows" v-if="versionData.WIN_VERSION">
            <template #title>
              Windows
            </template>
            <a-row class="overflow-auto scrollable h-full" justify="center" align="center">
              <a-col :xs="24" :lg="10">
                <div class="flex flex-col items-center justify-center scrollable">
                  <img class="w-1/3 mt-10" src="@/assets/img/win.png" />
                  <a-space>
                    <a-button type="primary" size="large" v-if="versionData.WIN_CLIENT"
                      @click="navigateToUrl(versionData.WIN_CLIENT)">
                      <template #icon>
                        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.75 11.0625L19.6875 9.33752V21.4125H6.75V11.0625Z" fill="#ffffff" stroke="#ffffff"
                            stroke-width="4" stroke-linejoin="round" />
                          <path d="M24.8623 8.84464L41.2498 6.75V21.4125H24.8623V8.84464Z" fill="#ffffff"
                            stroke="#ffffff" stroke-width="4" stroke-linejoin="round" />
                          <path d="M24.8623 27.45L41.2498 27.8333V41.25L24.8623 38.5666V27.45Z" fill="#ffffff"
                            stroke="#ffffff" stroke-width="4" stroke-linejoin="round" />
                          <path d="M6.75 26.5875L19.6875 26.899V37.8L6.75 35.6198V26.5875Z" fill="#ffffff"
                            stroke="#ffffff" stroke-width="4" stroke-linejoin="round" />
                        </svg>
                      </template>
                      Download
                    </a-button>
                  </a-space>

                  <a-button-group class="mt-6" type="secondary">
                    <a-button>
                      <template #icon>
                        <icon-command />
                      </template>
                      {{ versionData.WIN_VERSION }}
                    </a-button>
                    <a-button>
                      <template #icon>
                        <icon-cloud />
                      </template>
                      {{ versionData.WIN_SIZE }}
                    </a-button>
                    <a-button>
                      <template #icon>
                        <icon-schedule />
                      </template>
                      {{ versionData.WIN_DATE }}
                    </a-button>
                  </a-button-group>
                </div>
              </a-col>
              <a-col :xs="24" :lg="14">
                <div class="flex flex-col items-center my-10">
                  <div class="overflow-x-auto space-nowrap">
                    <div class="inline-flex space-x-4 rounded-xl">
                      <img v-for="(screenshot, index) in versionData.WIN_SCREENSHOTS" :key="index" :src="screenshot"
                        alt="Screenshot" class="rounded-xl  w-auto object-contain" />
                    </div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="android" v-if="versionData.ANDROID_VERSION">
            <template #title>
              Android
            </template>
            <a-row class="overflow-auto scrollable h-full" justify="center" align="center">
              <a-col :xs="24" :lg="10">
                <div class="flex flex-col items-center justify-center scrollable">
                  <img class="w-1/3 mt-10" src="@/assets/img/android.png" />
                  <a-space>
                    <a-button type="primary" size="large" v-if="versionData.ANDROID_CLIENT"
                      @click="navigateToUrl(versionData.ANDROID_CLIENT)">
                      <template #icon>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M43.9011 36H4.09863C5.10208 25.8934 13.6292 18 23.9999 18C34.3706 18 42.8977 25.8934 43.9011 36Z"
                            fill="none" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" />
                          <path d="M14 20L10 13" stroke="#ffffff" stroke-width="4" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M33 20L37 13" stroke="#ffffff" stroke-width="4" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <circle cx="15" cy="29" r="2" fill="#ffffff" />
                          <circle cx="33" cy="29" r="2" fill="#ffffff" />
                        </svg>
                      </template>
                      Download
                    </a-button>
                  </a-space>
                  <a-button-group class="mt-6" type="secondary">
                    <a-button>
                      <template #icon>
                        <icon-command />
                      </template>
                      {{ versionData.ANDROID_VERSION }}
                    </a-button>
                    <a-button>
                      <template #icon>
                        <icon-cloud />
                      </template>
                      {{ versionData.ANDROID_SIZE }}
                    </a-button>
                    <a-button>
                      <template #icon>
                        <icon-schedule />
                      </template>
                      {{ versionData.ANDROID_DATE }}
                    </a-button>
                  </a-button-group>
                </div>
              </a-col>
              <a-col :xs="24" :lg="14">
                <div class="flex flex-col items-center my-10">
                  <div class="overflow-x-auto space-nowrap">
                    <div class="inline-flex space-x-1">
                      <img v-for="(screenshot, index) in versionData.ANDROID_SCREENSHOTS" :key="index" :src="screenshot"
                        alt="Screenshot" class="rounded-xl h-[60vh]" />
                    </div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="ios" v-if="versionData.IOS_CLIENT">
            <template #title>
              iOS
            </template>
            <a-row class="overflow-auto scrollable h-full" justify="center" align="center">
              <a-col :xs="24" :lg="10">
                <div class="flex flex-col items-center justify-center scrollable">
                  <img class="w-1/3 mt-10" src="@/assets/img/ios.png" />
                  <a-space>
                    <a-button type="primary" size="large" v-if="versionData.IOS_CLIENT"
                      @click="navigateToUrl(versionData.IOS_CLIENT)">
                      <template #icon>
                        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M23.9111 11.3176C23.9931 9.08606 24.6201 7.12594 25.7772 5.4874C26.9402 3.84056 28.8628 2.6707 31.4945 2.00781C31.512 2.08885 31.5302 2.16994 31.5491 2.25072V2.67472C31.5491 3.63616 31.3159 4.73862 30.8556 5.95127C30.3732 7.12541 29.6193 8.23048 28.618 9.22782C27.6815 10.1066 26.8151 10.6884 26.0494 10.9514C25.7966 11.0269 25.45 11.1012 25.0314 11.1681C24.6591 11.2261 24.2856 11.276 23.9111 11.3176Z"
                            fill="#ffffff" />
                          <path
                            d="M24.3502 14.629C21.3775 14.629 19.3136 11.9999 16.3813 11.9999C13.4491 11.9999 7.4082 14.6951 7.4082 23.9999C7.4082 33.3047 12.7726 39.2999 13.3726 39.9999C13.9725 40.7 15.3601 42.4994 17.5098 42.4994C19.6596 42.4994 22.0131 40.7902 24.3502 40.7902C26.6872 40.7902 29.6288 42.4994 31.5492 42.4994C33.4696 42.4994 34.2595 41.7165 35.5665 40.3662C36.8734 39.0159 39.3663 34.8952 40.2369 32.422C38.8029 31.5684 35.0021 29.2511 35.0021 23.9999C35.0021 20.4992 36.2814 17.5909 38.8401 15.2752C37.1615 13.0917 35.2147 11.9999 32.9996 11.9999C29.6769 11.9999 27.3229 14.629 24.3502 14.629Z"
                            fill="#ffffff" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" />
                        </svg>
                      </template>
                      Download
                    </a-button>
                  </a-space>

                  <a-button-group class="mt-6" type="secondary">
                    <a-button>
                      <template #icon>
                        <icon-command />
                      </template>
                      {{ versionData.IOS_VERSION }}
                    </a-button>
                    <a-button>
                      <template #icon>
                        <icon-cloud />
                      </template>
                      {{ versionData.IOS_SIZE }}
                    </a-button>
                    <a-button>
                      <template #icon>
                        <icon-schedule />
                      </template>
                      {{ versionData.IOS_DATE }}
                    </a-button>
                  </a-button-group>
                </div>
              </a-col>
              <a-col :xs="24" :lg="14">
                <div class="flex flex-col items-center my-10">
                  <div class="overflow-x-auto space-nowrap">
                    <div class="inline-flex space-x-1">
                      <img v-for="(screenshot, index) in versionData.IOS_SCREENSHOTS" :key="index" :src="screenshot"
                        alt="Screenshot" class="rounded-xl h-[60vh]" />
                    </div>
                  </div>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>

          <a-tab-pane key="log">
            <template #title>
              更新日志
            </template>
            <a-row class="overflow-auto scrollable h-full" justify="start" align="start">
              <a-col :xs="24" :lg="24">
                <div class="mb-10">
                <Markdown :content="updatelogContent" />
              </div>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
    <div class="absolute top-3 right-3">
      <a-space>
        <AppTheme :size="'small'" />
        <a :href="versionData.WEBSITE" target="_blank">
          <a-button :size="'small'" type="primary" status="success">官网</a-button>
        </a>
      </a-space>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, onBeforeUnmount } from "vue";

// 引入设备检测逻辑
const device = useDevice();
const isMobile = ref(device.isMobile);
const isMedia = ref(false);

// 定义默认选中的tab key
const activeKey = ref('welcome');

// 检测页面宽度
const checkWidth = () => {
  isMedia.value = window.innerWidth < 768;
};

// 在组件挂载时添加监听器
onMounted(() => {
  window.addEventListener("resize", checkWidth);
  checkWidth(); // 初始化检查
});

// 清理监听器
onUnmounted(() => {
  window.removeEventListener("resize", checkWidth);
});

const versionData = ref({});

async function fetchVersionData() {
  try {
    const response = await fetch('/version.json');
    if (response.ok) {
      const data = await response.json();
      versionData.value = data;

      // 根据设备类型和版本信息设置默认的选中标签
      if (device.isMacOS && versionData.value.MAC_VERSION) {
        activeKey.value = 'mac';
      } else if (device.isWindows && versionData.value.WIN_VERSION) {
        activeKey.value = 'windows';
      } else if (device.isAndroid && versionData.value.ANDROID_VERSION) {
        activeKey.value = 'android';
      } else if (device.isIos && versionData.value.IOS_CLIENT) {
        activeKey.value = 'ios';
      } else {
        activeKey.value = 'log';  // 如果没有匹配设备，默认选择日志页面
      }

    } else {
      console.error('Failed to fetch version information.');
    }
  } catch (error) {
    console.error('Error fetching version information:', error);
  }
}
const welcomeContent = ref('');
const updatelogContent = ref('');
async function fetchMarkdownContent(url, contentRef) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const text = await response.text();
      contentRef.value = text;
    } else {
      console.error(`Failed to fetch content from ${url}.`);
    }
  } catch (error) {
    console.error(`Error fetching content from ${url}:`, error);
  }
}

onMounted(() => {
  fetchMarkdownContent('/welcome.md', welcomeContent);
  fetchMarkdownContent('/updatelog.md', updatelogContent);
  fetchVersionData();
});

const navigateToUrl = (url) => {
  const link = document.createElement('a');
  link.href = url;
  if (!url.startsWith('https://share.orence.net/')) {
    link.target = '_blank';
  }
  // 设置Referer
  link.referrerPolicy = 'no-referrer-when-downgrade'; // 您可以根据需要调整
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

import QrcodeVue from "qrcode.vue";
// 定义一个响应式变量存储当前的域名
const url = ref<string>('');

// 获取当前域名
onMounted(() => {
  url.value = window.location.origin; // 获取当前域名 (例如: http://localhost:8080 或 http://example.com)
});
</script>
