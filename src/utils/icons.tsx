import React from 'react';
import Svg, {Path} from 'react-native-svg';

type IconProps = {
  size: number;
  color?: string;
};

export function PlusIcon({size, color}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path d="M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H12.75V19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19V12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H11.25V5C11.25 4.58579 11.5858 4.25 12 4.25Z" />
    </Svg>
  );
}

export function BackArrowIcon({size, color}: IconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}>
      <Path
        d="M4.25 12.2743L19.25 12.2743"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function DeleteIcon({size, color}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 1024 1024">
      <Path
        d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
        fill={color}
      />
    </Svg>
  );
}

export function PaintIcon({size, color}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Path
        d="M28.395 16.137c-.074-.894-.433-1.698-.793-2.507-.284-.638-.621-1.25-1.091-1.771-.217-.243-.461-.487-.765-.619a4.252 4.252 0 0 0-.588-.212c-.35-.092-.717-.124-1.077-.151a28.012 28.012 0 0 0-1.923-.074 58.598 58.598 0 0 0-1.027.002c-.295.003-.586.01-.878-.012a2.349 2.349 0 0 1-.271-.071.743.743 0 0 1-.038-.022 1.328 1.328 0 0 1-.037-.039l-.041-.073a2.811 2.811 0 0 1-.072-.258 1.514 1.514 0 0 1-.002-.117c.013-.066.03-.13.051-.194a3.22 3.22 0 0 1 .248-.398c.241-.295.498-.577.773-.84.166-.161.334-.319.494-.485.194-.201.359-.437.514-.667.236-.352.424-.728.56-1.128.116-.332.135-.669.114-1.018a.885.885 0 0 0-.118-.392.75.75 0 0 0-.179-.27c-.138-.131-.277-.264-.424-.385-.111-.092-.223-.186-.341-.269a3.057 3.057 0 0 0-.673-.333A9.26 9.26 0 0 0 19.7 3.48c-.37-.098-.752-.153-1.128-.216-.448-.074-.9-.129-1.353-.177a13.8 13.8 0 0 0-1.202-.077c-.205-.005-.411-.01-.616-.01-.186 0-.373.004-.558.017-.428.03-.855.096-1.281.166-.367.059-.73.144-1.082.269-1.583.563-2.978 1.507-4.2 2.65-.284.265-.566.538-.83.824-.278.3-.533.619-.782.94-.52.669-.973 1.383-1.37 2.129-.19.356-.35.726-.507 1.097a11.15 11.15 0 0 0-.439 1.193 21.551 21.551 0 0 0-.533 2.325 15.78 15.78 0 0 0-.243 2.454 8.78 8.78 0 0 0 .041 1.169c.053.452.14.887.249 1.329a9.52 9.52 0 0 0 .944 2.367c.385.678.763 1.372 1.211 2.011.243.347.496.693.791.997.289.295.579.59.876.876.601.575 1.285 1.08 2.004 1.495.717.411 1.421.822 2.212 1.075.787.253 1.591.37 2.409.468 1.633.19 3.305.236 4.927-.068.771-.144 1.519-.36 2.245-.654a13.74 13.74 0 0 0 2.288-1.154c.737-.47 1.43-1.043 1.956-1.747.24-.323.444-.664.642-1.014.19-.336.393-.664.571-1.003.203-.383.348-.796.501-1.2.144-.378.269-.759.38-1.148.214-.765.374-1.536.485-2.323.111-.792.151-1.609.087-2.403zm-1.563 2.277a14.37 14.37 0 0 1-.398 1.834c-.098.336-.192.673-.317.997-.107.28-.222.557-.338.834-.186.411-.423.79-.652 1.18-.223.376-.444.751-.7 1.105-.267.315-.56.596-.876.861-.71.526-1.471.949-2.278 1.304-.483.198-.968.385-1.474.519-.494.13-.987.243-1.491.322a9.621 9.621 0 0 1-1.045.086c-.409.004-.82.002-1.23-.019a31.946 31.946 0 0 1-2.332-.209 9.15 9.15 0 0 1-1.828-.488 15.855 15.855 0 0 1-1.278-.671c-.214-.122-.43-.243-.64-.374a8.94 8.94 0 0 1-.547-.383c-.35-.287-.676-.594-.991-.92a14.421 14.421 0 0 1-.909-1.006 19.96 19.96 0 0 1-.906-1.379c-.317-.513-.621-1.029-.866-1.578a11.097 11.097 0 0 1-.347-1.013 12.17 12.17 0 0 1-.245-1.102c-.089-.934-.053-1.888.047-2.82.185-1.287.464-2.564.945-3.774a11.95 11.95 0 0 1 .747-1.498c.326-.541.685-1.053 1.065-1.552.344-.432.699-.85 1.095-1.239.401-.393.813-.766 1.254-1.114a9.901 9.901 0 0 1 1.934-1.128c.393-.154.79-.296 1.2-.399.378-.094.759-.166 1.144-.228.919-.108 1.848-.064 2.767.045.505.072 1.009.158 1.509.262.5.104.979.251 1.455.435.093.044.182.093.269.15.254.166.498.328.392.68-.082.272-.359.574-.539.794a6.85 6.85 0 0 1-.642.68c-.251.236-.47.494-.686.763-.337.422-.642.833-.789 1.364-.118.428-.057.874.083 1.285.181.533.549.961 1.089 1.147.463.162.953.158 1.436.151.396-.007.795-.004 1.191.002.756.013 1.504.081 2.256.144l.068.007c.197.032.388.078.576.141.053.026.104.054.156.086.162.14.306.297.442.463.35.499.603 1.053.846 1.612.172.428.319.858.399 1.315.038.377.046.754.046 1.132-.003.398-.02.796-.067 1.194zM9.856 14.649c.302.085.625.051.929-.006.223-.042.437-.16.64-.262a2.585 2.585 0 0 0 1.019-.935c.23-.358.365-.772.411-1.193.041-.365-.046-.71-.199-1.038a1.806 1.806 0 0 0-.236-.378c-.114-.14-.254-.24-.396-.35a.745.745 0 0 0-.288-.097.84.84 0 0 0-.42-.135 3.798 3.798 0 0 0-.214-.005c-.544 0-1.093.112-1.545.428a2.578 2.578 0 0 0-.64.636 2.483 2.483 0 0 0-.328.687c-.068.218-.087.457-.116.682-.02.155.018.323.048.474.028.155.085.31.151.452.233.487.661.894 1.184 1.04zm.14-2.069c.019-.107.045-.209.079-.31.032-.062.067-.121.105-.178.047-.052.095-.101.146-.148.056-.037.113-.07.173-.102.087-.029.175-.052.265-.072.144-.011.287-.01.432-.002l.018.018.027.049c.027.078.049.154.066.234.001.037 0 .073-.001.11a2.67 2.67 0 0 1-.082.313 2.663 2.663 0 0 1-.198.358 1.758 1.758 0 0 1-.137.136 2.606 2.606 0 0 1-.319.176 2.018 2.018 0 0 1-.173.05c-.045.002-.09.002-.135.001-.015-.004-.029-.007-.043-.012h-.001a1.435 1.435 0 0 1-.101-.105 1.75 1.75 0 0 1-.084-.138 3.022 3.022 0 0 1-.049-.187c.001-.065.006-.128.012-.191zm2.269 4.7a.804.804 0 0 0-.539-.214.717.717 0 0 0-.436.146.737.737 0 0 0-.27-.052c-.144 0-.286.02-.426.046a1.14 1.14 0 0 0-.251.096c-.116.05-.219.107-.326.175-.26.164-.52.365-.712.603-.229.284-.413.607-.488.964a3.466 3.466 0 0 0-.061.658c-.009.645.245 1.329.789 1.701.299.207.63.284.988.31.184.014.37-.009.555-.035.243-.034.441-.075.669-.175.221-.098.413-.249.59-.411.066-.061.12-.136.175-.207a2.111 2.111 0 0 0 .452-.942c.022-.101.042-.205.061-.306a2.581 2.581 0 0 0-.77-2.357zm-.735 1.988a3.569 3.569 0 0 1-.13.54 1.496 1.496 0 0 1-.077.128 1.846 1.846 0 0 1-.166.165 1.297 1.297 0 0 1-.114.066 2.137 2.137 0 0 1-.21.05 2.82 2.82 0 0 1-.356.004.875.875 0 0 1-.073-.021l-.05-.028-.021-.022-.04-.069a2.005 2.005 0 0 1-.067-.253 3.035 3.035 0 0 1 .008-.457c.011-.054.025-.106.041-.16.036-.071.076-.139.12-.206.023-.025.048-.049.074-.072.139-.099.282-.192.433-.27l.047-.014.072-.001a.733.733 0 0 0 .367-.099l.038.073c.044.125.079.251.108.382.004.089.003.176-.004.264zm-.463 2.414.022-.004.177-.024-.199.028zm7.394-1.318c-.166-.361-.492-.588-.813-.802a.638.638 0 0 0-.352-.101.78.78 0 0 0-.415.122 4.307 4.307 0 0 0-.441-.047 1.727 1.727 0 0 0-.555.096c-.315.096-.579.273-.83.479-.16.131-.302.308-.422.474a2.78 2.78 0 0 0-.311.518 2.76 2.76 0 0 0-.203.682 3.94 3.94 0 0 0-.053.472c.009.111.024.221.041.33.024.09.057.177.1.26.109.256.306.479.522.653a2.2 2.2 0 0 0 .955.459c.689.148 1.449.013 2-.435.382-.31.614-.785.782-1.235a3.42 3.42 0 0 0 .182-.99 2.239 2.239 0 0 0-.044-.483 1.687 1.687 0 0 0-.143-.452zM16.445 21l.017.002-.017-.002zm-.01-.002h-.001l-.063-.009.064.009zm.527.977a3.636 3.636 0 0 1-.213.381 3.992 3.992 0 0 1-.064.068c-.031.02-.064.039-.097.056-.07.023-.139.041-.211.055a2.498 2.498 0 0 1-.287-.002 2.398 2.398 0 0 1-.249-.065 1.747 1.747 0 0 1-.127-.073 1.756 1.756 0 0 1-.128-.131l-.017-.027c-.001-.05.001-.1.005-.151.022-.136.051-.27.095-.402.053-.106.115-.206.181-.305.07-.081.143-.158.223-.231a1.7 1.7 0 0 1 .165-.094c.055-.018.109-.032.165-.044.037-.001.074 0 .11.002l.074.014c.071.012.14.02.207.02.1 0 .196-.017.292-.059l.011.012.019.072c.009.111.011.221.003.333a3.58 3.58 0 0 1-.157.571zm6.417-4.171c-.227-.229-.492-.356-.785-.474a.778.778 0 0 0-.396 0 .749.749 0 0 0-.286.153.679.679 0 0 0-.586.065 8.294 8.294 0 0 0-.465.317c-.286.21-.512.446-.724.73-.068.09-.112.197-.159.302a3.079 3.079 0 0 0-.146.396c-.068.24-.092.501-.09.749a2.13 2.13 0 0 0 .706 1.528c.223.199.457.321.73.433.147.063.348.089.505.096.201.007.389-.017.588-.05.341-.055.66-.232.924-.448.118-.096.225-.19.321-.308.341-.422.507-.944.551-1.478a2.644 2.644 0 0 0-.225-1.348 2.316 2.316 0 0 0-.463-.663zm-.875 1.925c-.02.101-.044.198-.075.297-.04.085-.083.168-.131.249-.05.055-.104.106-.16.156a1.523 1.523 0 0 1-.13.076 2.352 2.352 0 0 1-.183.049c-.05.002-.1 0-.149-.003a1.554 1.554 0 0 1-.073-.02 1.579 1.579 0 0 1-.131-.08 2.677 2.677 0 0 1-.131-.13 2.291 2.291 0 0 1-.057-.098 1.892 1.892 0 0 1-.067-.222 2.1 2.1 0 0 1 .003-.263 2.09 2.09 0 0 1 .066-.247c.027-.054.057-.106.09-.156.071-.079.146-.152.225-.223.15-.107.306-.205.462-.305a.86.86 0 0 0 .076-.054c.026.014.052.028.077.044.042.039.082.079.121.122.037.059.071.119.104.18.03.086.053.172.071.261.005.124.002.244-.008.367z"
        fill={color}
      />
    </Svg>
  );
}

export function CrossIcon({size, color}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.96967 5.63227C6.26256 5.33937 6.73744 5.33937 7.03033 5.63227L12.5 11.1019L17.9697 5.63227C18.2626 5.33937 18.7374 5.33937 19.0303 5.63227C19.3232 5.92516 19.3232 6.40003 19.0303 6.69293L13.5607 12.1626L19.0303 17.6323C19.3232 17.9252 19.3232 18.4 19.0303 18.6929C18.7374 18.9858 18.2626 18.9858 17.9697 18.6929L12.5 13.2233L7.03033 18.6929C6.73744 18.9858 6.26256 18.9858 5.96967 18.6929C5.67678 18.4 5.67678 17.9252 5.96967 17.6323L11.4393 12.1626L5.96967 6.69293C5.67678 6.40003 5.67678 5.92516 5.96967 5.63227Z"
        fill={color}
      />
    </Svg>
  );
}

export function BlubIcon({size, color}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 35 35">
      <Path
        d="M17.5 29.334a6.5 6.5 0 0 1-6.491-6.49v-1.09a11.733 11.733 0 1 1 12.982 0v1.091a6.5 6.5 0 0 1-6.491 6.489Zm0-26.584a9.233 9.233 0 0 0-4.615 17.228 1.248 1.248 0 0 1 .624 1.082v1.784a3.991 3.991 0 0 0 7.982 0V21.06a1.25 1.25 0 0 1 .622-1.081A9.232 9.232 0 0 0 17.5 2.75Zm3.548 32h-7.1a1.25 1.25 0 0 1 0-2.5h7.1a1.25 1.25 0 1 1 0 2.5Z"
        fill={color}
      />
    </Svg>
  );
}
