'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import { alpha, useTheme } from '@mui/material/styles';
import type { SxProps } from '@mui/material/styles';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import type { ApexOptions } from 'apexcharts';

import { Chart } from '@/components/core/chart';
import { TasksProgress } from './tasks-progress';
import { TotalCustomers } from './total-customers';
import { Budget } from './budget';
import { TotalProfit } from './total-profit';
import { DepositAmount } from './statistic/deposit_amount';
import { TotalJudment } from './statistic/total_judment';
import { WidthDrawal } from './statistic/withdrawal';
import { MemberDeposit } from './statistic/member_deposit';
import { MemberWithdrawal } from './statistic/member_withdrawal';
import { DistributorWithdrawal } from './statistic/distributor_withdrawal';
import { DistributorDeposit } from './statistic/distributor_deposit';
import { BetAmount } from './statistic/bet_amount';
import { WarningAmount } from './statistic/warning_amount';
import { BettingUser } from './statistic/betting_user';
import { ResistredUser } from './statistic/registered_user';
import { Visitors } from './statistic/visitors';


export interface SalesProps {
  sx?: SxProps;
}

export function StatisticAday({ sx }: SalesProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader
        title={'Statistic of today'}
      >
      </CardHeader>
      <CardContent className='flex flex-row  flex-wrap '>
        <Grid lg={3} sm={6} xs={12}>
            <DepositAmount diff={12} trend="up" sx={{ height: '100%' }} value="w24k" />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <WidthDrawal diff={12} trend="down" sx={{ height: '100%' }} value="w24k" />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <MemberDeposit diff={12} trend="up" sx={{ height: '100%' }} value="w24k" />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <MemberWithdrawal diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <DistributorDeposit diff={16} trend="up" sx={{ height: '100%' }} value="1.6k" />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <DistributorWithdrawal diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <TotalJudment diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <BetAmount diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <WarningAmount diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <BettingUser diff={16} trend="up" sx={{ height: '100%' }} value="1" />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <ResistredUser diff={16} trend="up" sx={{ height: '100%' }} value="1" />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <Visitors diff={16} trend="up" sx={{ height: '100%' }} value="5" />
        </Grid>

        {/* <Grid lg={2} sm={6} xs={12}>
            <TasksProgress sx={{ height: '100%' }} value={75.5} />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <TotalProfit sx={{ height: '100%' }} value="$15k" />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <TasksProgress sx={{ height: '100%' }} value={75.5} />
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
            <TotalProfit sx={{ height: '100%' }} value="$15k" />
        </Grid> */}
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button color="inherit" endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />} size="small">
          Overview
        </Button>
      </CardActions>
    </Card>
  );
}